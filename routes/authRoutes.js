const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);
router.get(
  "/protected",
  authMiddleware.verifyToken,
  authController.protectedRoute
);

module.exports = router;
