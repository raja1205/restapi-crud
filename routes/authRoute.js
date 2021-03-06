const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/authController.js");

// Authentication routes
router.post('/register', registerUser);//
router.post('/login', loginUser);

module.exports = router;