import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "./authMiddlwware";
import HttpStatus from "../utils/httpStatusCode";

const adminOnly = async (req: Request, res: Response, next: NextFunction) => {
    const authReq = req as AuthenticatedRequest;
    if (!authReq.user?.isAdmin) {
        res.status(HttpStatus.FORBIDDEN).json({ success: false, message: "Access denied. Admin privileges required" })
        return
    }
    next()
}
export default adminOnly