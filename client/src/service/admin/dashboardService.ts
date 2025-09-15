import { AxiosError } from "axios";
import api from "../api"

export const getUsers = async (page = 1, limit = 5, searchQuery = "", signal?: AbortSignal) => {
    try {
        const response = await api.get("admin/users", { params: { page, limit, q: searchQuery }, signal })
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on  fetch users:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}