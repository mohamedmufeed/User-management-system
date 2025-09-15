import { GetPaginationQuery, GetPaginationResponse } from "../../../types/adminTypes";
import { IUserDTO } from "../../../types/userTypes";

export default interface IDashboardService {
    getAllUsers(query:GetPaginationQuery): Promise<GetPaginationResponse>
    fetchUser(id:string):Promise<IUserDTO>
    editUser(id:string,updateData:Partial<IUserDTO>):Promise<IUserDTO>
    toggleBlockUser(id:string):Promise<IUserDTO>
}