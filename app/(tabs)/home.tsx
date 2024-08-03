import { View, Text, Button } from 'react-native';
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

    const goToSettings = () => {
        router.push('/settings');
    };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Home Screen</Text>
      <Button title="Go to Settings" onPress={goToSettings} />
    </View>
  );
}
