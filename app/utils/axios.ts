import axiosLib from "axios";
import ApiUrlsManager from "../api/ApiUrlsManager";

const axios = axiosLib.create({
    baseURL: ApiUrlsManager.getBaseUrl(),
    headers: {
        Accept: "application/json"
    },
});

export default axios;