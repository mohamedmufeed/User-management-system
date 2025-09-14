import IUserRespository from "../../interface/repositories/userRespositoryInterface";
import IProfileService from "../../interface/service/user/profileServiceInterface";
import { toUserDto } from "../../utils/dto/userDto";
import HttpStatus from "../../utils/httpStatusCode";
import bcrypt from "bcrypt"

export class ProfileService implements IProfileService {
    constructor(private _userRepository: IUserRespository) { }
    getProfile = async (id: string) => {
        const user = await this._userRepository.findById(id)
        if (!user) {
            throw { status: HttpStatus.NOT_FOUND, message: "User not found" }
        }
        return   toUserDto(user)
    }
    changePassword = async (id: string, password: string, newPassword: string): Promise<{ message: string; }> => {
        const user = await this._userRepository.findById(id)
        if (!user) {
            throw { status: HttpStatus.NOT_FOUND, message: "User not found" }
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
              throw { status: HttpStatus.BAD_REQUEST, message: "Invalid current password" }
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        await this._userRepository.findByIdAndUpdate(id,hashedPassword)
         return { message: "Password updated successfully" };
    }

}