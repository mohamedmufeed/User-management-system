import { AxiosError } from "axios";
import api from "../api"

export const getProfile = async (id: string) => {
    try {
        const response = await api.get(`user/profile/${id}`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on fetching profile:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}

export const changePassword = async (id: string, password: string, newPassword: string) => {
    try {
        const response = await api.patch(`user/profile/${id}/password`, { password, newPassword })
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on changing  password:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}