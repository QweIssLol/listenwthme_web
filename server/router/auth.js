const express = require("express");
const { login, register, logout } = require("../controller/authController");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
