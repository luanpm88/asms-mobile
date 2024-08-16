class ApiUrls {
    private static readonly BASE_URL = `${process.env.EXPO_PUBLIC_HOST_NAME}/api`;
    private static readonly LOGIN = `${ApiUrls.BASE_URL}/login`;
    private static readonly REGISTER = `${ApiUrls.BASE_URL}/register`;

    public static getBaseUrl(): string {
        return this.BASE_URL;
    }

    public static getLoginUrl(): string {
        return this.LOGIN;
    }

    public static getLogOutUrl(): string {
        return '';
    }

    public static getRegisterUrl(): string {
        return this.REGISTER;
    }
}

export default ApiUrls;