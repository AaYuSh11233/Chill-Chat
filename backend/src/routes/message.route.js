import express from 'express';
// import { getUserProfile } from '../controllers/userController.js'; // Adjust the import path as necessary
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUsersForSidebar, getMessages, sendMessage } from '../controllers/message.controller.js';
const router = express.Router();
router.get('/users',protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
// userRoutes.js (or wherever your user-related routes are)
// router.get('/:userId/profile', getUserProfile);
export default router;
