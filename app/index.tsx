import { useRouter, type ErrorBoundaryProps } from "expo-router";
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        router.replace('/home');
      } else {
        router.replace('/login');
      }
    };

    checkLogin();
  }, []);

  return null;
}
