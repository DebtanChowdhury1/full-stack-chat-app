import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Route for signup
router.post("/signup", signup);

// Route for login
router.post("/login", login);

// Route for logout
router.post("/logout", protectRoute, logout); // Adding `protectRoute` for security

// Route for updating profile
router.put("/update-profile", protectRoute, updateProfile);

// Route to check authentication
router.get("/check", protectRoute, checkAuth);

export default router;
