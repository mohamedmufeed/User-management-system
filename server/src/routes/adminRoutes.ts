import { DashboardController } from "../controller/admin/dashboardController";
import { AdminRepository } from "../repositories/adminRespositories";
import { DashboardService } from "../service/admin/dashboardService";
import express from "express"

const adminRepository = new AdminRepository()
const dashboardService = new DashboardService(adminRepository)
const dashboardController = new DashboardController(dashboardService)

const router = express.Router()

router
    .get("/users", dashboardController.getAllUsers)

    
export default router