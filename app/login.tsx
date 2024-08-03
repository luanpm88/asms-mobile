import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Implement your login logic here
    router.replace('/');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;