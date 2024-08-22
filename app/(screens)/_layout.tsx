import { Stack } from "expo-router";

export default function ScreensLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="notification/index" 
                options={{
                    headerShown: true,
                    title: "Thông báo"
                }}
            />
            <Stack.Screen 
                name="authentication/login/index" 
                options={{
                    headerShown: false,
                    title: "Đăng nhập",
                    headerStyle: {
                    }
                }}
            />
            <Stack.Screen 
                name="message/index" 
                options={{
                    headerShown: true,
                    title: "Tin nhắn"
                }}
            />
        </Stack>
    );
}