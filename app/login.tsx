import { View, Text, Button } from 'react-native';
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    await AsyncStorage.setItem('userToken', 'dummy-token');
    router.replace('/home');
  };

  const handleProfile = async () => {
    await AsyncStorage.setItem('userToken', 'dummy-token');
    router.replace('/profile');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Profile" onPress={handleProfile} />
    </View>
  );
}
