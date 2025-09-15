import IAdminRepository from "../../interface/repositories/adminRespositoryInterface";
import IDashboardService from "../../interface/service/admin/dashboardServiceInterface";
import { GetPaginationQuery, GetPaginationResponse } from "../../types/adminTypes";
import { IUserDTO } from "../../types/userTypes";
import { toUserDto } from "../../utils/dto/userDto";
import HttpStatus from "../../utils/httpStatusCode";

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

    fetchUser = async (id: string): Promise<IUserDTO> => {
        const user = await this._adminRepository.findById(id)
        if (!user) {
            throw { status: HttpStatus.NOT_FOUND, message: "User not found" }
        }
        return toUserDto(user)
    }

    editUser = async (id: string, updateData: Partial<IUserDTO>): Promise<IUserDTO> => {
        const user = await this._adminRepository.findById(id)
        if (!user) {
            throw { status: HttpStatus.NOT_FOUND, message: "User not found" }
        }
        const updatedUser = await this._adminRepository.findByIdAndUpdate(id, updateData)
        if (!updatedUser) {
            throw { status: HttpStatus.INTERNAL_SERVER_ERROR, message: "Failed to update user" };
        }
        return toUserDto(updatedUser)
    }


}