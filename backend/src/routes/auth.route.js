import express from 'express';
// import { getUserProfile } from '../controllers/userController.js'; // Adjust the import path as necessary
import { login, logout, signup, updateProfile, checkAuth } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);
// userRoutes.js (or wherever your user-related routes are)
// router.get('/:userId/profile', getUserProfile);

export default router;