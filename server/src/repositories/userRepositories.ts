import { Document, HydratedDocument, Types } from "mongoose";
import IUserRespository from "../interface/repositories/userRespositoryInterface";
import User, { UserDocument } from "../model/user";
import { IUser } from "../types/userTypes";
import { BaseRepository } from "./baseRepository";

export class UserRepository extends BaseRepository<IUser> implements IUserRespository {
    constructor() {
        super(User)
    }
    async create(data: Partial<IUser>) {
        return super.create(data)
    }
    async findById(id: string) {
        return super.findById(id)
    }
    async findByPhone(phone: string): Promise<HydratedDocument<IUser> | null> {
        return this.model.findOne({ phone });
    }
}