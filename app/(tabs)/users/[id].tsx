import { Pressable, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


export default function user() {
    const params  = useLocalSearchParams<{ name: string }>();
    const [name2, setName2] = useState(params.name ?? "Chua co ten");
    const router = useRouter();

    useEffect(() => {
        setName2(params.name);
    }, [params.name]);

    return (
        <View>
            <Text>{params.name ? `Nguoi dung so ${params.name}` : 'Chua co nguoi dung'}</Text>
            {params.name 
            ? <Pressable onPress={() => {
                router.push({
                    pathname: "/users/details/[id]",
                    params: {
                        id: params.name,
                        name: params.name
                    }

                })
            }}>
                <Text>chuyen toi trang chi tiet cua hoc vien</Text>
            </Pressable>
            : null
            }
        </View>
        
    );
}