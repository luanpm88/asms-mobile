import { useEffect } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();

  useEffect(() => {
    const backAction = () => {
      router.back();
      return true; // Điều này ngăn chặn hành vi mặc định của nút back
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Settings Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
