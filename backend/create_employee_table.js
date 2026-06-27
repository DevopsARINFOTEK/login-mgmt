const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

async function createEmployeeTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS employee (
      employee_id SERIAL PRIMARY KEY,
      employee_code VARCHAR(50) UNIQUE,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      gender VARCHAR(20),
      date_of_birth DATE,
      mobile VARCHAR(20),
      email VARCHAR(150) UNIQUE,
      address TEXT,
      department VARCHAR(100),
      designation VARCHAR(100),
      role VARCHAR(100),
      joining_date DATE,
      employment_type VARCHAR(50),
      salary NUMERIC(12,2),
      status VARCHAR(50) DEFAULT 'Active',
      manager_name VARCHAR(150),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log("Employee table created or already exists.");
  } catch (error) {
    console.error("Failed to create employee table:", error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

createEmployeeTable();
