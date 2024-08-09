import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function tabLayout()
{
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
            }}/>
            <Tabs.Screen name="users/[id]" options={{
                title: "User",
                tabBarIcon:({color}) => <FontAwesome size={28} name="user" color={color} />
            }}/>
            <Tabs.Screen name="users/details/[id]" options={{
                title: "User details",
                tabBarIcon: ({color}) => <Entypo size={28} name="add-to-list" color={color}/>,
                href: null
            }}>
            </Tabs.Screen>
            {/* <Tabs.Screen name="users/create" options={{
                title: "Create new user",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="plus" />,
            }} /> */}
        </Tabs>

        // <GestureHandlerRootView>
        //     <Drawer>
        //         <Drawer.Screen name="index" options={{
        //             drawerLabel: "Home",
        //             title: "overview"
        //         }} />
        //         <Drawer.Screen name="user/[id]" options={{
        //             drawerLabel: "User",
        //             title: "overview"
        //         }} />
        //     </Drawer>
        // </GestureHandlerRootView>
    );
}