import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { store } from "./utils/redux/store/store";
import AuthContext from "./contexts/AuthContext";
import { loadUser } from "./services/AuthService";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import Splash from "./(screens)/splash";

export default function RootLayout() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState("loading");
  const router = useRouter();

  useEffect(() => {
    async function runEffect() {
      try {
        const user = await loadUser();
        setUser(user);
      } catch (e) {
        console.error("Fail to load user", e);
      }

      setStatus("idle");
    }

    runEffect();
  }, []);

  useEffect(() => {
    if (status === "loading") {
      router.replace("/(screens)/splash");
    }
    
    if (user) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/(screens)/authentication/login");
    }
  }, [user]);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ user, setUser }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          ): (
            <Stack.Screen name="(screens)" options={{ headerShown: false }} />            
          )}
          </Stack>
        </GestureHandlerRootView>
      </AuthContext.Provider>
    </Provider>
  );
}