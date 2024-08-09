import React from 'react';
import { View } from 'react-native';
import { Tabs } from 'expo-router';
import Colors from '../constants/Colors';
import { Feather, AntDesign, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          paddingTop: 7,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primaryColor,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: focused ? 'rgba(0,0,0,0.1)' : 'transparent',
              borderRadius: 15,
              padding: 3,
            }}>
              {focused ? (
                <Entypo name="home" size={20} color={color} />
              ) : (
                <AntDesign name="home" size={20} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Calendar',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: focused ? 'rgba(0,0,0,0.1)' : 'transparent',
              borderRadius: 15,
              padding: 3,
              
            }}>
               {focused ? (
                 <Entypo name="calendar" size={20} color={color} />
              ) : (
                <Feather name="calendar" size={20} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Cài đặt',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: focused ? 'rgba(0,0,0,0.1)' : 'transparent',
              borderRadius: 15,
              padding: 3,
            }}>
              {focused ? (
                 <Ionicons name="settings-sharp" size={20} color={color} />
              ) : (
              <AntDesign name="setting" size={20} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: focused ? 'rgba(0,0,0,0.1)' : 'transparent',
              borderRadius: 15,
              padding: 3,
            }}>
              {focused ? (
                 <FontAwesome5 name="user-alt" size={20} color={color} />
              ) : (
                <FontAwesome5 name="user" size={20} color={color} />
              )}
              
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
