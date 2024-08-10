import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
export default function RootLayout() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const isFocused = useIsFocused();
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
    if (isFocused) {
      if (isLoggedIn === false) {
        router.replace('/login');
      } else if (isLoggedIn === true) {
        router.replace('./(tabs)/home'); // Đổi thành đường dẫn chính sau khi đăng nhập
      }
    }
  }, [isFocused, isLoggedIn]);

  if (isLoggedIn === null) {
    return null; // Hoặc một màn hình loading
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack>
      {isLoggedIn ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <Stack.Screen name="login" />
      )}
    </Stack>
    </GestureHandlerRootView>
  );
}
