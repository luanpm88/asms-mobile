import axiosLib from "axios";
import ApiUrls from "../entities/api/ApiUrls";

const axios = axiosLib.create({
    baseURL: ApiUrls.getBaseUrl(),
    headers: {
        Accept: "application/json"
    },
});

export default axios;