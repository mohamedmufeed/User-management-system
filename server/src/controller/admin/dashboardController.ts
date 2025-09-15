import { Request, Response } from "express";
import IDashboardController from "../../interface/controller/admin/dashboardControllerInterface";
import IDashboardService from "../../interface/service/admin/dashboardServiceInterface";
import HttpStatus from "../../utils/httpStatusCode";
import { GetPaginationQuery } from "../../types/adminTypes";
import { IUserDTO } from "../../types/userTypes";

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
                message: "User fetching successfully",
            });
        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err?.message || "Internal server error" });
        }
    }

    fetchUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id
            if (!userId) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "User id is required" })
                return
            }
            const user = await this._dashboardSerice.fetchUser(userId)
            res.status(HttpStatus.OK).json({ user: user, success: true, message: "User fetched successfully" })
        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err?.message || "Internal server error" });
        }
    }

    editUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id
            const updateData: Partial<IUserDTO> = req.body;
            if (!userId) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "User id is required" });
                return
            }

            if (!updateData || Object.keys(updateData).length === 0) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "Update data is required" });
                return
            }
            const updatedUser = await this._dashboardSerice.editUser(userId, updateData)
            res.status(HttpStatus.OK).json({ user: updatedUser, success: true, message: "User updated successfully" })

        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err?.message || "Internal server error" });
        }
    }

}