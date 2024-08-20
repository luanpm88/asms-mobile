let token: (string | null) = null;
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setToken(newToken: string | null) {
    token = newToken;

    if (token !== null) {
        await AsyncStorage.setItem("token", token);
    } else {
        await AsyncStorage.removeItem("token");
    }
}

export async function getToken() {
    if (token !== null) {
        return token;
    }

    token = await AsyncStorage.getItem("token");
    
    return token;
}