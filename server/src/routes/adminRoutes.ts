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

router.get("/users", protect, adminOnly, dashboardController.getAllUsers)
      .post("/users" ,protect,adminOnly,dashboardController.addUser)

router.get("/user/:id", protect,adminOnly, dashboardController.fetchUser)
router.patch("/user/:id/edit",protect,adminOnly, dashboardController.editUser)
router.patch("/user/:id/block",protect,adminOnly,dashboardController.toggleBlockUser)



export default router