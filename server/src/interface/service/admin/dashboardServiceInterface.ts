import { GetPaginationQuery, GetPaginationResponse } from "../../../types/adminTypes";
import { IUserDTO } from "../../../types/userTypes";

export default interface IDashboardService {
    getAllUsers(query:GetPaginationQuery): Promise<GetPaginationResponse>
}