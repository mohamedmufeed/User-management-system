import { generateToken, generateRefreshToken, verifyRefreshToken } from "../../utils/jwt";
import bcrypt from "bcrypt";
import { toUserDto } from "../../utils/dto/userDto";
import HttpStatus from "../../utils/httpStatusCode";
import IUserRespository from "../../interface/repositories/userRespositoryInterface";


export class AuthService {
    constructor(private _userRepository: IUserRespository) {}

    register = async (firstName: string, lastName: string, phone: string, password: string) => {
        const existUser = await this._userRepository.findByPhone(phone);
        if (existUser) {
            throw { status: HttpStatus.BAD_REQUEST, message: "User already exists" };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this._userRepository.create({ firstName, lastName, phone, password: hashedPassword });

        const token = generateToken(newUser.id, newUser.isAdmin);
        const refreshToken = generateRefreshToken(newUser.id, newUser.isAdmin);

        return { user: toUserDto(newUser), token, refreshToken };
    };

    login = async (phone: string, password: string) => {
        const user = await this._userRepository.findByPhone(phone);
        if (!user) throw { status: HttpStatus.NOT_FOUND, message: "User not found" };
        if (user.isBlocked) throw { status: HttpStatus.BAD_REQUEST, message: "User is blocked" };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw { status: HttpStatus.UNAUTHORIZED, message: "Invalid credentials" };

        const token = generateToken(user.id, user.isAdmin);
        const refreshToken = generateRefreshToken(user.id, user.isAdmin);

        return { user: toUserDto(user), token, refreshToken };
    };

    refreshToken = async (token: string) => {
        if (!token) throw new Error("No refresh token provided");

        try {
            const decoded = verifyRefreshToken(token);
            return generateToken(decoded.id, decoded.isAdmin);
        } catch (err) {
            throw new Error("Invalid or expired refresh token");
        }
    };
}
