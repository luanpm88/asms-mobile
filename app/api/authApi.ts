import axios from 'axios';
import ApiUrls from '../entities/api/ApiUrls';

export const login = async (email: string, password: string) => {
    const response = await axios.post(ApiUrls.getLoginUrl(), { email, password });
    return response.data;
}

export const logout = async () => {
    await axios.post(ApiUrls.getLogOutUrl());
}