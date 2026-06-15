// routes/authRoutes.js

const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers
} = require("../services/authService");

const {
  authMiddleware,
  roleMiddleware
} = require("../middleware/middleware");

/*
  Register
  POST /api/auth/register
*/
router.post("/register", async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

/*
  Login
  POST /api/auth/login
*/
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const data = await loginUser(
      username,
      password
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: data.token,
      user: data.user
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
});


/*
  Profile
  GET /api/auth/profile
*/
router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      success: true,
      user: req.user
    });
  }
);

/*
  Get All Users
  GET /api/auth/users
*/
router.get(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    try {
      const users = await getUsers();

      res.json({
        success: true,
        users
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
);

module.exports = router;