class ApiUrlsManager {
    
    // protected static readonly BASE_URL = `192.168.2.14/api`;
    // protected static readonly BASE_URL = `http://asms.com/api`;
    protected static readonly BASE_URL = `https://asms-americanstudy.com/api`;
    // protected static readonly BASE_URL = `${process.env.EXPO_PUBLIC_HOST_NAME}/api`;

    public static getBaseUrl(): string {
        return this.BASE_URL;
    }
}

export default ApiUrlsManager;