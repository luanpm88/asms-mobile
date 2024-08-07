import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{headerShown: false}}/>
      <Tabs.Screen name="contacts" options={{headerShown: false}}/>
      <Tabs.Screen name="settings" options={{headerShown: false}}/>
      <Tabs.Screen name="profile" options={{headerShown: false}}/>
    </Tabs>
  );
}
