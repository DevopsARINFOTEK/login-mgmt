// src/components/LoginForm.jsx

import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage("Login Successful");

        // Redirect based on role
        if (data.role === "admin") {
          window.location.href = "/admin-dashboard";
        } else if (data.role === "employee") {
          window.location.href = "/employee-dashboard";
        } else if (data.role === "student") {
          window.location.href = "/student-dashboard";
        } else if (data.role === "intern") {
          window.location.href = "/intern-dashboard";
        } else if (data.role === "trainer") {
          window.location.href = "/trainer-dashboard";
        }
      } else {
        setMessage(data.message || "Invalid Credentials");
      }
    } catch (error) {
      setMessage("Server Error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>AR INFOTEK Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: message.includes("Successful")
                ? "green"
                : "red",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;