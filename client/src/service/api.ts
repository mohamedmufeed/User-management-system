import axios from "axios";

const isProduction = window.location.hostname !== "localhost";
const api = axios.create({
    baseURL: isProduction ? "" : "http://localhost:3000/api/",
    withCredentials: true, 
});

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 403) {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "/login";
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry && !originalRequest.url.includes("/user/refresh")) {
            originalRequest._retry = true;
            try {
                await api.post("/user/refresh");
                return api(originalRequest);   
            } catch (refreshError) {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);


export default api;
