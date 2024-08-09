import { useRouter } from "expo-router";
import { Text, View, Pressable } from "react-native";


export default function Index()
{
    const router = useRouter();

    const getRandomId = () => {
        return Math.floor(Date.now().valueOf()) + 1;
    }
    const showCreateUserModal = () => {
        router.push({
            pathname: "/users/create"
        })
    }

    return (
        <View>
            <Text>Index</Text>
            <Pressable onPress={() => {
                router.push({
                    pathname: "/users/[id]",
                    params: {
                        id: 1,
                        name: getRandomId()
                    }
                });
            }}>
                <Text>toi trang users</Text>
            </Pressable>
            <Pressable onPress={() => showCreateUserModal()}>
                <Text>Tao moi user</Text>
            </Pressable>
        </View>
    );
}