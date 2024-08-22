import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenService } from "../TokenService";

class TokenServiceImpl implements TokenService {
    private static token: string | null = null;

    async setToken(newToken: string | null): Promise<void> {
        TokenServiceImpl.token = newToken;

        if (TokenServiceImpl.token !== null) {
            await AsyncStorage.setItem("token", TokenServiceImpl.token);
        } else {
            await AsyncStorage.removeItem("token");
        }
    }

    async getToken(): Promise<string | null> {
        if (TokenServiceImpl.token !== null) {
            return TokenServiceImpl.token;
        }

        TokenServiceImpl.token = await AsyncStorage.getItem("token");
        
        return TokenServiceImpl.token;
    }
}

export default TokenServiceImpl;
