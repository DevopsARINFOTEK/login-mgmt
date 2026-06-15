// services/authService.js

const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ===============================
// REGISTER USER
// ===============================
const registerUser = async (userData) => {
  const {
    full_name,
    username,
    email,
    password,
    role = "student"
  } = userData;

  // Check existing username/email
  const existingUser = await pool.query(
    `SELECT * FROM users
     WHERE username = $1 OR email = $2`,
    [username, email]
  );

  if (existingUser.rows.length > 0) {
    throw new Error("Username or Email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user
  const result = await pool.query(
    `INSERT INTO users
    (
      full_name,
      username,
      email,
      password,
      role
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING
      id,
      full_name,
      username,
      email,
      role,
      created_at`,
    [
      full_name,
      username,
      email,
      hashedPassword,
      role
    ]
  );

  return result.rows[0];
};

// ===============================
// LOGIN USER
// ===============================
const loginUser = async (
  username,
  password
) => {

  const result = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );

  if (result.rows.length === 0) {
    throw new Error("User not found");
  }

  const user = result.rows[0];

  const passwordMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!passwordMatch) {
    throw new Error("Invalid Password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

  // Update Last Login
  await pool.query(
    `UPDATE users
     SET last_login = NOW()
     WHERE id = $1`,
    [user.id]
  );

  return {
    token,
    user: {
      id: user.id,
      full_name: user.full_name,
      username: user.username,
      email: user.email,
      role: user.role
    }
  };
};

// ===============================
// GET USER PROFILE
// ===============================
const getUserById = async (id) => {

  const result = await pool.query(
    `SELECT
      id,
      full_name,
      username,
      email,
      role,
      status,
      created_at
     FROM users
     WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

// ===============================
// GET ALL USERS
// ===============================
const getAllUsers = async () => {

  const result = await pool.query(
    `SELECT
      id,
      full_name,
      username,
      email,
      role,
      status,
      created_at
     FROM users
     ORDER BY id DESC`
  );

  return result.rows;
};

// ===============================
// DELETE USER
// ===============================
const deleteUser = async (id) => {

  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers,
  deleteUser
};