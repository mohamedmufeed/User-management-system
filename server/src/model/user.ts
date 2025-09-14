import mongoose, { HydratedDocument, Model, Schema } from "mongoose";
import { IUser } from "../types/userTypes";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

export type UserDocument = HydratedDocument<IUser>;
const User :Model<IUser>= mongoose.model<IUser>("User", userSchema);
export default User;