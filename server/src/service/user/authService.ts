import IAuthService from "../../interface/service/user/authSeriviceInterface";
import { IUserDTO } from "../../types/userTypes";
import HttpStatus from "../../utils/httpStatusCode";
import bcrypt from "bcrypt"
import { generateToken } from "../../utils/jwt";
import { toUserDto } from "../../utils/dto/userDto";
import IUserRespository from "../../interface/repositories/userRespositoryInterface";
import jwt from "jsonwebtoken"

export class AuthService implements IAuthService {
    constructor(private _userRepository: IUserRespository) { }
    register = async (firstName: string, lastName: string, phone: string, password: string): Promise<{ user: IUserDTO; token: string; refreshToken: string; }> => {
        const existUser = await this._userRepository.findByPhone(phone)
        if (existUser) {
            throw { status: HttpStatus.BAD_REQUEST, message: "User alredy exists" }
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const data = { firstName, lastName, phone, password: hashedPassword }
        const newUser = await this._userRepository.create(data)
        const token = generateToken(newUser.id, newUser.isAdmin)
        const refreshToken = generateToken(newUser.id, newUser.isAdmin)
        const userDto = toUserDto(newUser)
        return { user: userDto, token, refreshToken }
    }
    login = async (phone: string, password: string): Promise<{ user: IUserDTO; token: string; refreshToken: string; }> => {
        const user = await this._userRepository.findByPhone(phone)
        if (!user) {
            throw { status: HttpStatus.NOT_FOUND, message: "User not found" }
        }
        if (user.isBlocked) {
            throw { status: HttpStatus.BAD_REQUEST, message: "User is Blocked" }
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw { status: HttpStatus.UNAUTHORIZED, message: "Invalid credentials" }
        }
        const token = generateToken(user.id, user.isAdmin)
        const refreshToken = generateToken(user.id, user.isAdmin)
        const userDto = toUserDto(user)
        return { user: userDto, token, refreshToken }
    }

    refreshToken = async (refreshToken: string): Promise<string> => {

        if (!refreshToken) {
            throw new Error("No refresh token found");
        }
        try {
            const decoded = jwt.verify( refreshToken,process.env.REFRESH_JWT_SECRET as string) as { id: string; isAdmin: boolean };
            const newAccessToken = generateToken(decoded.id, decoded.isAdmin);
            console.log("New access token:", newAccessToken);

            return newAccessToken;
        } catch (err: any) {
            console.error("Refresh token verify failed:", err.message);
            throw new Error("Invalid or expired refresh token");
        }
    };

}