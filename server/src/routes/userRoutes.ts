import { AuthController } from "../controller/user/authController";
import { UserRepository } from "../repositories/userRepositories";
import { AuthService } from "../service/user/authService";
import express from "express";
const userRepository = new UserRepository()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService)

const router = express.Router()


router.
    route("/auth/signup")
    .post(authController.register)
router.
    route("/auth/login")
    .post(authController.login)
router.
    route("/auth/logout/:id")
    .post(authController.logout)
router
    .route("/refresh")
    .post(authController.refreshToken);

export default router