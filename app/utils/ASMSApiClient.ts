import axiosLib from "axios";
import ApiUrlsManager from "../api/ApiUrlsManager";
import TokenServiceImpl from "../services/impl/TokenServiceImpl";

const ASMSApiClient = axiosLib.create({
    baseURL: ApiUrlsManager.getBaseUrl(),
    headers: {
        Accept: "application/json"
    },
});

ASMSApiClient.interceptors.request.use(
    async (config) => {
        const tokenService = new TokenServiceImpl();
        const token = await tokenService.getToken();

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