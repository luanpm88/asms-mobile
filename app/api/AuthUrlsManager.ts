import ApiUrlsManager from "./ApiUrlsManager";

class AuthUrlsManager extends ApiUrlsManager {
    
    public static readonly LOGIN_SUFFIX = "/login";
    public static readonly LOGOUT_SUFFIX = "/logout";
    public static readonly REGISTER_SUFFIX = "/register";
    public static readonly USER_SUFFIX = "/user";

    public static getLoginUrl(): string {
        return this.BASE_URL + this.LOGIN_SUFFIX;
    }

    public static getLogOutUrl(): string {
        return this.BASE_URL + this.LOGOUT_SUFFIX;
    }

    public static getRegisterUrl(): string {
        return this.BASE_URL + this.REGISTER_SUFFIX;
    }

    public static getUserUrl(): string {
        return this.BASE_URL + this.USER_SUFFIX;
    }
}

export default AuthUrlsManager;