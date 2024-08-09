import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // const checkLogin = async () => {
    //   const token = await AsyncStorage.getItem('userToken');
    //   setIsLoggedIn(!!token);
    // };

    // checkLogin();
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace('/login');
    } 
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    return null; // Loading screen or spinner
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
      >
        {isLoggedIn ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="login" options={{ headerShown: false }} />
        )}
      </Stack>
    </GestureHandlerRootView>
  );
}
