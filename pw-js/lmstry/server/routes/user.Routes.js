// Import the Router class from the Express library
import { Router } from "express";

// Import the register, login, logout, and getProfile functions from the user.controller.js file
import { register, login, logout, getProfile, forgotPassword, resetPassword, changePassword, updateUser } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middlerware.js";
import upload from "../middlewares/multer.middleware.js";

// Create a new instance of the Router class
const router = Router();

router.post('/register',upload.single("avatar"), register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me',isLoggedIn, getProfile);
router.post("/reset", forgotPassword);
router.post("/reset/:resetToken", resetPassword);
router.post("/change-password", isLoggedIn, changePassword);
router.put("/update/:id", isLoggedIn, upload.single("avatar"), updateUser);

// Export the router instance to make it available for import by other modules
export default router;