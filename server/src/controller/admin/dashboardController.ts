import { Request, Response } from "express";
import IDashboardController from "../../interface/controller/admin/dashboardControllerInterface";
import IDashboardService from "../../interface/service/admin/dashboardServiceInterface";
import HttpStatus from "../../utils/httpStatusCode";
import { GetPaginationQuery } from "../../types/adminTypes";

export class DashboardController implements IDashboardController {
    constructor(private _dashboardSerice: IDashboardService) { }
    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const { page = 1, limit = 10, q = "" } = req.query
            const query: GetPaginationQuery = {
                page: Number(page),
                limit: Number(limit),
                searchQuery: String(q)
            }
            const result = await this._dashboardSerice.getAllUsers(query)
            res.status(HttpStatus.OK).json({
                success: true,
                users: result.users,
                totalUsers: result.totalUsers,
                totalPages: result.totalPages,
                message: "User fetching successful",
            });
        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err?.message || "Internal server error" });
        }
    }
}