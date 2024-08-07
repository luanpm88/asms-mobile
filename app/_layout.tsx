import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function RootLayout() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      setIsLoggedIn(false);
      // const token = await AsyncStorage.getItem('userToken');
      // if (token) {
      //   setIsLoggedIn(true);
      // } else {
      //   setIsLoggedIn(false);
      // }
    };

    checkLogin();
  }, []);

  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace('/login');
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    return null; // Hoặc một màn hình loading
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack>
      {isLoggedIn ? (
        <Stack.Screen name="(tabs)"  />
      ) : (
        <Stack.Screen name="/login" />
      )}
    </Stack>
    </GestureHandlerRootView>
  );
}
