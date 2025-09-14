import { Request, Response } from "express";
import IProfileController from "../../interface/controller/user/profileControllerInterface";
import IProfileService from "../../interface/service/user/profileServiceInterface";
import HttpStatus from "../../utils/httpStatusCode";

export class ProfileController implements IProfileController {
    constructor(private _profileService: IProfileService) { }
    getProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.id
            if (!userId) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "User id is required" })
                return
            }
            const user = await this._profileService.getProfile(userId)
            res.status(HttpStatus.OK).json({ user, success: true, message: "User profile fetched successfully" })
        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err?.message || "Internal server error" });
        }
    }
    changePassword = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params
            const { password, newPassword } = req.body

            if (!id) {
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "User ID is required" })
                return
            }

            if (!password || !newPassword) {
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "All fields are required" })
                return
            }

            const result = await this._profileService.changePassword(id, password, newPassword)

            res.status(HttpStatus.OK).json({ success: true, message: result.message })
        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: err?.message || "Internal server error"
            })
        }
    }

}