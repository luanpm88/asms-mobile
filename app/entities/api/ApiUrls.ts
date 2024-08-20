class ApiUrls {
    // private static readonly BASE_URL = `192.168.2.14/api`;
    // private static readonly BASE_URL = `http://asms.com/api`;
    private static readonly BASE_URL = `https://asms-americanstudy.com/api`;
    // private static readonly BASE_URL = `${process.env.EXPO_PUBLIC_HOST_NAME}/api`;

    public static readonly LOGIN_SUFFIX = "/login";
    public static readonly LOGOUT_SUFFIX = "/logout";
    public static readonly REGISTER_SUFFIX = "/register";
    public static readonly USER_SUFFIX = "/user";

    public static getBaseUrl(): string {
        return this.BASE_URL;
    }

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

export default ApiUrls;