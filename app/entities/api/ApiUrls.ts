class ApiUrls {
    // private static readonly BASE_URL = `${process.env.EXPO_PUBLIC_HOST_NAME}/api`;
    // private static readonly BASE_URL = `192.168.2.169/api`;
    private static readonly BASE_URL = `https://asms-americanstudy.com/api`;
    private static readonly LOGIN = `${this.BASE_URL}/login`;
    private static readonly LOGOUT = `${this.BASE_URL}/logout`;
    private static readonly REGISTER = `${this.BASE_URL}/register`;

    public static getBaseUrl(): string {
        return this.BASE_URL;
    }

    public static getLoginUrl(): string {
        return this.LOGIN;
    }

    public static getLogOutUrl(): string {
        return this.LOGOUT;
    }

    public static getRegisterUrl(): string {
        return this.REGISTER;
    }
}

export default ApiUrls;