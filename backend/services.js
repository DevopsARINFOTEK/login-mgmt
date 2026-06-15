// services/authService.js

const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Register User
const registerUser = async (userData) => {
  const { username, password, full_name, role } = userData;

  // Check existing user
  const existingUser = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );

  if (existingUser.rows.length > 0) {
    throw new Error("Username already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  const result = await pool.query(
    `INSERT INTO users
    (username, password, full_name, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, username, full_name, role`,
    [
      username,
      hashedPassword,
      full_name,
      role || "student",
    ]
  );

  return result.rows[0];
};

// Login User
const loginUser = async (username, password) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );

  if (result.rows.length === 0) {
    throw new Error("User not found");
  }

  const user = result.rows[0];

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      full_name: user.full_name,
      role: user.role,
    },
  };
};

// Get All Users
const getUsers = async () => {
  const result = await pool.query(
    "SELECT id, username, full_name, role FROM users"
  );

  return result.rows;
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
};