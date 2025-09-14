import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "./authMiddlwware";
import HttpStatus from "../utils/httpStatusCode";

const adminOnly = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.user?.isAdmin) {
        res.status(HttpStatus.FORBIDDEN).json({ success: false, message: "Access denied. Admin privileges required" })
        return
    }
    next()
}
export default adminOnly