// config/configure.js

require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// Test Database Connection
pool.connect((err, client, release) => {
  if (err) {
    console.error(
      "❌ PostgreSQL Connection Error:",
      err.message
    );
  } else {
    console.log(
      "✅ AR INFOTEK PostgreSQL Connected Successfully"
    );
    release();
  }
});

module.exports = pool;