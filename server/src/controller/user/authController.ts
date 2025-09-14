import { Request, Response } from "express";
import IAuthController from "../../interface/controller/user/authControllerInterface";
import IAuthService from "../../interface/service/user/authSeriviceInterface";
import HttpStatus from "../../utils/httpStatusCode";
const accessTokenMaxAge = Number(process.env.ACCESS_TOKEN_MAX_AGE) || 6 * 60 * 60 * 1000;
const refreshTokenMaxAge = Number(process.env.REFRESH_TOKEN_MAX_AGE) || 7 * 24 * 60 * 60 * 1000;

export class AuthController implements IAuthController {
    constructor(private _authService: IAuthService) {

    }
    register = async (req: Request, res: Response): Promise<void> => {
        try {
            const { firstName, lastName, phone, password } = req.body
            if (!firstName || !lastName || !phone || !password) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "All fields are required" })
                return
            }
            const { user, token, refreshToken } = await this._authService.register(firstName, lastName, phone, password)

            res.cookie("access_token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: accessTokenMaxAge,
            });
            res.cookie("refresh_token", refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: refreshTokenMaxAge,
            });
            res.status(HttpStatus.OK).json({ user, success: true, message: "User created successfully" })
        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err?.message || "Internal server error" });
        }
    }
    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { phone, password } = req.body
            if (!phone || !password) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "All fields are required" })
                return
            }
            const { user, token, refreshToken } = await this._authService.login(phone, password)

            res.cookie("access_token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: accessTokenMaxAge,
            });
            res.cookie("refresh_token", refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: refreshTokenMaxAge,
            });
            res.status(HttpStatus.OK).json({ user, success: true, message: "User Login successfully" })
        } catch (error) {
            const err = error as Error
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: err?.message || "Internal server error" });
        }
    }

    logout = async (req: Request, res: Response): Promise<void> => {
        try {

            res.cookie("access_token", " ", {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                expires: new Date(0),
            });

            res.cookie("refresh_token", " ", {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                expires: new Date(0),
            });

            res.status(HttpStatus.OK).json({ success: true, message: "Logged out successfully" });
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: "Logout failed", error: error });
        }
    };
    refreshToken = async (req: Request, res: Response): Promise<void> => {
        try {
            const refreshToken = req.cookies?.refresh_token;

            if (!refreshToken) {
                res.status(HttpStatus.UNAUTHORIZED).json({ message: "No refresh token provided" });
                return;
            }

            const newToken = await this._authService.refreshToken(refreshToken);

            res.cookie("access_token", newToken, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: accessTokenMaxAge,
            });

            res.status(HttpStatus.OK).json({ accessToken: newToken });
        } catch (error) {
            const err = error as Error;
            res.status(HttpStatus.UNAUTHORIZED).json({
                success: false,
                message: err?.message || "Invalid or expired refresh token",
            });
        }
    };

}
