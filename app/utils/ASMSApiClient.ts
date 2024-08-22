import axiosLib from "axios";
import ApiUrlsManager from "../api/ApiUrlsManager";
import TokenService from "../services/TokenService";

const ASMSApiClient = axiosLib.create({
    baseURL: ApiUrlsManager.getBaseUrl(),
    headers: {
        Accept: "application/json"
    },
});

ASMSApiClient.interceptors.request.use(
    async (config) => {
        const token = await TokenService.getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default ASMSApiClient;