// middleware.js

const jwt = require("jsonwebtoken");

/*
  Authentication Middleware
*/
const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};

/*
  Role Authorization Middleware
*/
const roleMiddleware = (...roles) => {
  return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied"
      });
    }

    next();
  };
};

module.exports = {
  authMiddleware,
  roleMiddleware
};

const express = require("express");
const router = express.Router();

const {
  authMiddleware,
  roleMiddleware
} = require("../middleware/middleware");

// Any logged-in user
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

// Admin only
router.get(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin"
    });
  }
);

// Student only
router.get(
  "/student",
  authMiddleware,
  roleMiddleware("student"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Student"
    });
  }
);

module.exports = router;