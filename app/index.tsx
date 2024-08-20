import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./utils/redux/reducer/features/auth/authSlice";

const App = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        dispatch(loginSuccess(token));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace('/(screens)/login');
    } else if (isLoggedIn === true) {
      router.replace('./(tabs)/home');
    }
  }, [isLoggedIn, router]);

};

export default App;