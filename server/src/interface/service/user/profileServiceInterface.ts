import { IUserDTO } from "../../../types/userTypes";

export  default interface IProfileService{
    getProfile(id:string):Promise<IUserDTO>
    changePassword(is:string,password:string,newPassword:string):Promise<{message:string}>
}