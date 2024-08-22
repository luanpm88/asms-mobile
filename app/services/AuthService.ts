import AuthUrlsManager from "../api/AuthUrlsManager";
import ASMSApiClient from "../utils/ASMSApiClient";
import TokenService from "./TokenService";

interface CredentialsProps {
    email: string; 
    password: string; 
    deviceName: string;
}

class AuthService {
  
    static async login(credentials: CredentialsProps) {
        const { data } = await ASMSApiClient.post(AuthUrlsManager.LOGIN_SUFFIX, credentials);

        await TokenService.setToken(data.token);
    }

    static async loadUser() {
        const { data: user } = await ASMSApiClient.get(AuthUrlsManager.USER_SUFFIX);

        return user;
    }

    static async logout() {
        await ASMSApiClient.post(AuthUrlsManager.LOGOUT_SUFFIX);
        
        await TokenService.setToken(null);
    }
}

export default AuthService;
