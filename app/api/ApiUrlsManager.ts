class ApiUrlsManager {
    
    protected static readonly BASE_URL = `${process.env.EXPO_PUBLIC_HOST_NAME}/api`;

    public static getBaseUrl(): string {
        return this.BASE_URL;
    }
}

export default ApiUrlsManager;