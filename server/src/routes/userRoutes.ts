import { AuthController } from "../controller/user/authController";
import { UserRepository } from "../repositories/userRepositories";
import { AuthService } from "../service/user/authService";
import express from "express";
import { ProfileService } from "../service/user/profileService";
import { ProfileController } from "../controller/user/profileController";

const userRepository = new UserRepository()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService)


const profileService = new ProfileService(userRepository)
const profileController = new ProfileController(profileService)
const router = express.Router()


router.post("/auth/signup", authController.register)
router.post("/auth/login", authController.login)
router.post("/auth/logout", authController.logout)
router.post("/refresh", authController.refreshToken);

router.get("/profile/:id", profileController.getProfile);
router.patch("/profile/:id/password", profileController.changePassword);

export default router