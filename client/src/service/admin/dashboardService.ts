import { AxiosError } from "axios";
import api from "../api"
import type { IUser } from "../../types/userTypes";

export const getUsers = async (page = 1, limit = 5, searchQuery = "", signal?: AbortSignal,   status?: string) => {
    try {
        const response = await api.get("admin/users", { params: { page, limit, q: searchQuery , status }, signal })
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

export const getUser = async (id: string) => {
    try {
        const response = await api.get(`admin/user/${id}`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on  fetch user:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}

export const editUser = async (id: string, updateData: Partial<IUser>) => {
    try {
        const response = await api.patch(`admin/user/${id}/edit`, updateData)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on  edit user:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}

export const toggleBlockUser = async (id: string) => {
    try {
        const response = await api.patch(`admin/user/${id}/block`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on  edit user:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}

export const addUser = async (data: Partial<IUser>) => {
    try {
        const response = await api.post("admin/users", data)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Error on  add user:", error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }
}