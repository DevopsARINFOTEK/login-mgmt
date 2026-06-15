const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

exports.register = async (req, res) => {
  try {
    const {
      username,
      password,
      student_name,
      course
    } = req.body;

    const loginResult = await pool.query(
      `INSERT INTO login(username,password)
       VALUES($1,$2)
       RETURNING login_id`,
      [username, password]
    );

    const login_id = loginResult.rows[0].login_id;

    await pool.query(
      `INSERT INTO student(
        student_name,
        course,
        login_id
      )
      VALUES($1,$2,$3)`,
      [student_name, course, login_id]
    );

    res.status(201).json({
      success: true,
      message: "Registration Successful"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};