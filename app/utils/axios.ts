import axiosLib from "axios";
import ApiUrlsManager from "../api/ApiUrlsManager";
import { getToken } from "../services/TokenService";

const axios = axiosLib.create({
    baseURL: ApiUrlsManager.getBaseUrl(),
    headers: {
        Accept: "application/json"
    },
});

axios.interceptors.request.use(
    async (config) => {
        const token = await getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;