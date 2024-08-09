import { Stack } from "expo-router";

export default function RootLayout()
{
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }} />
            <Stack.Screen name="create" options={{
                title: "tao moi",
                presentation: 'modal'
            }}/>
        </Stack>  
    );
}