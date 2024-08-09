import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function detail()
{
    const router = useRouter();
    const params = useLocalSearchParams<{ name: string }>();
    const [name, setName] = useState(params.name ?? null);
    const handleGoBack = () => {
        // router.setParams({
        //     name: "Hoang Anh dep trai"
        // })
        router.back();
    }

    useEffect(() => {
        setName(params.name);
    }, [params.name]);

    return (
        <View>
            <Text>{name ? `day la trang chi tiet cua hoc vien ${name}` : "chua co ten hoc vien"}</Text>
            <Pressable onPress={() => handleGoBack()}>
                <Text>Quay lai</Text>
            </Pressable>
        </View>
    );
}