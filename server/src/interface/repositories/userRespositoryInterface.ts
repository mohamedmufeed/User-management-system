import { HydratedDocument } from "mongoose";
import { IUser } from "../../types/userTypes";

export default interface IUserRespository {
  create(data: Partial<IUser>): Promise<HydratedDocument<IUser>>;
  findById(id: string): Promise<HydratedDocument<IUser> | null>;
  findByPhone(phone: string): Promise<HydratedDocument<IUser> | null>;
  findByIdAndUpdate(id:string,password:string):Promise<HydratedDocument<IUser>|null>
}
