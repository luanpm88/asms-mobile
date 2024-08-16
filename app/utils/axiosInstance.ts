import axios from "axios";
import { getToken } from "../storage/tokenStorage";
import ApiUrls from "../entities/api/ApiUrls";

const axiosInstance = axios.create({
    baseURL: ApiUrls.getBaseUrl(),
});

axiosInstance.interceptors.request.use(async (config) => {
    const token = await getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosInstance;