import { AxiosError } from "axios";
import type { IUser } from "../../types/userTypes";
import api from "../api";
import { data } from "react-router-dom";

export const signup = async (data: Partial<IUser>) => {
    try {
        const response = await api.post("user/auth/signup", data)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on user signup:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}

export const login = async (data: Partial<IUser>) => {
    try {
        const response = await api.post("user/auth/login", data)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on user login:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}
