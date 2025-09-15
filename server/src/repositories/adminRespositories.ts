import IAdminRepository from "../interface/repositories/adminRespositoryInterface";
import User from "../model/user";
import { GetPaginationQuery, GetPaginationResponse } from "../types/adminTypes";
import { IUser } from "../types/userTypes";
import { BaseRepository } from "./baseRepository";

export class AdminRepository extends BaseRepository<IUser> implements IAdminRepository {
    constructor() { super(User) }

    async create(data: Partial<IUser>) {
        return super.create(data)
    }
    async findById(id: string) {
        return super.findById(id)
    }
    async findByIdAndUpdate(id:string,updateData:Partial<IUser>){
        return super.update(id,updateData)
    }

    async findAllActiveUsers({ page, limit, searchQuery }: GetPaginationQuery) {
        const skip = (page - 1) * limit
        const searchFilter = searchQuery
            ? {
                $or: [
                    { firstName: { $regex: searchQuery, $options: "i" } },
                    { lastName: { $regex: searchQuery, $options: "i" } },
                    { phone: { $regex: searchQuery, $options: "i" } },
                ]
            } : {}
        const users = await this.model.find(searchFilter).skip(skip).limit(limit)
        const totalUsers = await this.model.countDocuments(searchFilter)
        const totalPages = Math.ceil(totalUsers / limit)
        return { users, totalUsers, totalPages }
    }
}