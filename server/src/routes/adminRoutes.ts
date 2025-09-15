import { DashboardController } from "../controller/admin/dashboardController";
import adminOnly from "../middleware/adminOnly";
import protect from "../middleware/authMiddlwware";
import { AdminRepository } from "../repositories/adminRespositories";
import { DashboardService } from "../service/admin/dashboardService";
import express from "express"

const adminRepository = new AdminRepository()
const dashboardService = new DashboardService(adminRepository)
const dashboardController = new DashboardController(dashboardService)

const router = express.Router()

router
    .get("/users", protect, adminOnly, dashboardController.getAllUsers)

router
    .get("/user/:id", dashboardController.fetchUser)
    .patch("/user/:id/edit", dashboardController.editUser)


export default router