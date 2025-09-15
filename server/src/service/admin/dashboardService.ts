import IAdminRepository from "../../interface/repositories/adminRespositoryInterface";
import IDashboardService from "../../interface/service/admin/dashboardServiceInterface";
import { GetPaginationQuery, GetPaginationResponse } from "../../types/adminTypes";
import { toUserDto } from "../../utils/dto/userDto";

export class DashboardService implements IDashboardService {
    constructor(private _adminRepository: IAdminRepository) { }

    getAllUsers = async (query: GetPaginationQuery): Promise<GetPaginationResponse> => {
        const response = await this._adminRepository.findAllActiveUsers(query)
        const mappedResponse = {
            totalUsers: response.totalUsers,
            totalPages: response.totalPages,
            users: response.users.map((user) => toUserDto(user))
        }
        return mappedResponse
    }

}