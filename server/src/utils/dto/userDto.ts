import { IUser, IUserDTO } from "../../types/userTypes";

export const toUserDto=(user:IUser):IUserDTO=>{
return {
    _id: user._id?.toString() || "",
   firstName:user.firstName,
   lastName:user.lastName,
   phone:user.lastName,
   isAdmin:user.isAdmin,
   isBlocked:user.isBlocked
}
}