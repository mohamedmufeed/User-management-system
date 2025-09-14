import { IUser, IUserDTO } from "../../../types/userTypes";

export default interface IAuthService{
    register(firstName:string,lastName:string,phone:string,password:string):Promise<{user:IUserDTO, token:string,refreshToken:string}>
    login(phone:string,password:string):Promise<{user:IUserDTO, token:string,refreshToken:string}>
}