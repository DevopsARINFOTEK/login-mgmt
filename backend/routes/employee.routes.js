const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

// ==========================
// GET ALL EMPLOYEES
// ==========================
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM employee ORDER BY employee_id ASC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch employees",
      error: error.message,
    });
  }
});

// ==========================
// GET EMPLOYEE BY ID
// ==========================
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM employee WHERE employee_id=$1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching employee",
      error: error.message,
    });
  }
});

// ==========================
// ADD NEW EMPLOYEE
// ==========================
router.post("/", async (req, res) => {
  try {
    const {
      employee_code,
      first_name,
      last_name,
      gender,
      date_of_birth,
      mobile,
      email,
      address,
      department,
      designation,
      role,
      joining_date,
      employment_type,
      salary,
      status,
      manager_name,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO employee
      (
        employee_code,
        first_name,
        last_name,
        gender,
        date_of_birth,
        mobile,
        email,
        address,
        department,
        designation,
        role,
        joining_date,
        employment_type,
        salary,
        status,
        manager_name
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,$7,$8,
        $9,$10,$11,$12,$13,$14,$15,$16
      )
      RETURNING *`,
      [
        employee_code,
        first_name,
        last_name,
        gender,
        date_of_birth,
        mobile,
        email,
        address,
        department,
        designation,
        role,
        joining_date,
        employment_type,
        salary,
        status,
        manager_name,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Employee Added Successfully",
      employee: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to add employee",
      error: error.message,
    });
  }
});

// ==========================
// UPDATE EMPLOYEE
// ==========================
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      employee_code,
      first_name,
      last_name,
      gender,
      date_of_birth,
      mobile,
      email,
      address,
      department,
      designation,
      role,
      joining_date,
      employment_type,
      salary,
      status,
      manager_name,
    } = req.body;

    const result = await pool.query(
      `UPDATE employee
       SET
       employee_code=$1,
       first_name=$2,
       last_name=$3,
       gender=$4,
       date_of_birth=$5,
       mobile=$6,
       email=$7,
       address=$8,
       department=$9,
       designation=$10,
       role=$11,
       joining_date=$12,
       employment_type=$13,
       salary=$14,
       status=$15,
       manager_name=$16,
       updated_at=CURRENT_TIMESTAMP
       WHERE employee_id=$17
       RETURNING *`,
      [
        employee_code,
        first_name,
        last_name,
        gender,
        date_of_birth,
        mobile,
        email,
        address,
        department,
        designation,
        role,
        joining_date,
        employment_type,
        salary,
        status,
        manager_name,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee Updated Successfully",
      employee: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Update Failed",
      error: error.message,
    });
  }
});

// ==========================
// DELETE EMPLOYEE
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM employee WHERE employee_id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Delete Failed",
      error: error.message,
    });
  }
});

module.exports = router;