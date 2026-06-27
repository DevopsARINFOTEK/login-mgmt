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

async function seedEmployees() {
  const insertQuery = `
    INSERT INTO employee (
      employee_code, first_name, last_name, gender, date_of_birth, mobile, email,
      address, department, designation, role, joining_date, employment_type, salary, status, manager_name
    )
    VALUES
      ('EMP001','John','Doe','Male','1990-05-14','9876543210','john.doe@example.com','123 Main Street','Development','Senior Developer','Developer','2020-01-10','Full-Time',25000,'Active','Sarah Lee'),
      ('EMP002','Jane','Smith','Female','1992-08-20','9765432109','jane.smith@example.com','456 Park Avenue','HR','HR Manager','Manager','2019-04-15','Full-Time',22000,'Active','Michael Clark'),
      ('EMP003','Mike','Johnson','Male','1991-02-03','9654321098','mike.johnson@example.com','789 Market Road','Accounts','Accountant','Accountant','2021-03-01','Full-Time',18000,'Pending','Rachel Green')
    ON CONFLICT (email) DO NOTHING;
  `;

  try {
    const result = await pool.query(insertQuery);
    console.log("Seeded employees successfully.");
    console.log(result.rowCount, "rows inserted");
  } catch (error) {
    console.error("Failed to seed employees:", error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seedEmployees();
