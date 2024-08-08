import { Tabs } from "expo-router";
import Colors from "../constants/Colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0,
      },
      tabBarShowLabel: true,
      tabBarActiveTintColor: Colors.primaryColor,
    }}>
       <Tabs.Screen 
       options={{
        headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={28} color={color} />
          ),
        }} name="home" />
      <Tabs.Screen name="contacts"   
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}/>
      <Tabs.Screen name="settings" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={28} color={color} />
          ),
        }} />
    </Tabs>
  );
}
