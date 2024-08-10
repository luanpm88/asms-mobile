import React from 'react';
import { View } from 'react-native';
import { Tabs } from 'expo-router';
import Colors from '../constants/Colors';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
          
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
              padding: 5,
            }}>
              <Feather name="home" size={28} color={color} />
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
              padding: 5,
            }}>
              <AntDesign name="calendar" size={28} color={color} />
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
              padding: 5,
            }}>
              <AntDesign name="setting" size={24} color={color} />
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
              borderRadius: 10,
              padding: 5,
            }}>
              <AntDesign name="user" size={28} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
