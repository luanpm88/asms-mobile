import AsyncStorage from "@react-native-async-storage/async-storage";

class TokenService {
    private static token: string | null = null;

    static async setToken(newToken: string | null) {
        this.token = newToken;

        if (this.token !== null) {
            await AsyncStorage.setItem("token", this.token);
        } else {
            await AsyncStorage.removeItem("token");
        }
    }

    static async getToken(): Promise<string | null> {
        if (this.token !== null) {
            return this.token;
        }

        this.token = await AsyncStorage.getItem("token");
        
        return this.token;
    }
}

export default TokenService;
