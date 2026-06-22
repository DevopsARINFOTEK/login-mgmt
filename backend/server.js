const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});


// // Get all students with login username
// app.get("/students", async (req, res) => {

//     try {

//         const result = await pool.query(`
//             SELECT
//                 s.student_id,
//                 s.student_name,
//                 s.course,
//                 l.username
//             FROM student s
//             JOIN login l
//             ON s.login_id = l.login_id
//         `);

//         res.json(result.rows);

//     } catch (error) {

//         res.status(500).json({
//             error: error.message
//         });

//     }

// });


// Login Check
app.post("/login", async (req, res) => {

    try {

        const { username, password, role } = req.body;

        const result = await pool.query(
            "SELECT * FROM public.login WHERE username = $1 AND password = $2",
            [username, password]
        );

        if (result.rows.length > 0) {

            res.json({
                success: true,
                message: "Login Success",
                role: result.rows[0].role
            });




        } else {

            res.json({
                message: "Invalid Login"
            });

        }

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`);
});