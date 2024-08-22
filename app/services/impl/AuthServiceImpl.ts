import AuthUrlsManager from "@/app/api/AuthUrlsManager";
import ASMSApiClient from "@/app/utils/ASMSApiClient";
import TokenServiceImpl from "./TokenServiceImpl";
import { AuthCredentialsProps } from "../props/AuthCredentialsProps";

class AuthServiceImpl {
  
    async login(credentials: AuthCredentialsProps) {
        const { data } = await ASMSApiClient.post(AuthUrlsManager.LOGIN_SUFFIX, credentials);
        const tokenService = new TokenServiceImpl();

        await tokenService.setToken(data.token);
    }

    async loadUser() {
        const { data: user } = await ASMSApiClient.get(AuthUrlsManager.USER_SUFFIX);

        return user;
    }

    async logout() {
        await ASMSApiClient.post(AuthUrlsManager.LOGOUT_SUFFIX);
        const tokenService = new TokenServiceImpl();

        await tokenService.setToken(null);
    }
}

export default AuthServiceImpl;
