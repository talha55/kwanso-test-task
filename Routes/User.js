// Express Router
const express = require("express");
const router = express.Router();

// Middleware
const jwtAuth = require("../Middleware/JWT")

// Controller
const UserController = require("../Controllers/UserController")

// Routes
router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.get("/user", jwtAuth, UserController.userInfo)

module.exports = router