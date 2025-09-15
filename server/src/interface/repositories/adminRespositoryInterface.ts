import { HydratedDocument } from "mongoose";
import { IUser } from "../../types/userTypes";
import { GetPaginationQuery } from "../../types/adminTypes";

export default interface IAdminRepository {
    create(data: Partial<IUser>): Promise<HydratedDocument<IUser>>;
    findById(id: string): Promise<HydratedDocument<IUser> | null>;
    findAllActiveUsers({ page, limit, searchQuery }: GetPaginationQuery): Promise<{ users: IUser[], totalUsers: number; totalPages: number; }>;
    findByIdAndUpdate(id: string, updateData: Partial<IUser>):Promise<HydratedDocument<IUser> | null>
    findBIdAndUpdateBlockStatus(id:string,status:boolean):Promise<HydratedDocument<IUser> | null>
      findByPhone(phone: string): Promise<HydratedDocument<IUser> | null>;
    
}