import { NextFunction, Request, Response } from "express";
import { IUser } from "../types/userTypes";
import HttpStatus from "../utils/httpStatusCode";
import jwt from "jsonwebtoken"
import User from "../model/user";

 export interface AuthenticatedRequest extends Request {
    user: Partial<IUser>
}

const protect = async (req: Request, res: Response, next: NextFunction) => {
      const authReq = req as AuthenticatedRequest;
    const token = req.cookies?.access_token;
    if (!token) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        return;
    }
    try {

        const decode = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
        const user = await User.findById(decode.id)
        if (!user) {
            res.status(HttpStatus.UNAUTHORIZED).json({ success: false, message: "User not found" });
            return;
        }
        if (user.isBlocked) {
            res.clearCookie("access_token");
            res.clearCookie("refresh_token");
            res.status(HttpStatus.FORBIDDEN).json({ message: 'Your account is blocked' });
            return
        }
        authReq.user = { _id: user._id.toString(), isAdmin: user.isAdmin }
        next()
    } catch (error) {
        const err = error as Error
        res.status(401).json({ message: `Invalid token or expires${err.message}` });
    }
}

export default protect