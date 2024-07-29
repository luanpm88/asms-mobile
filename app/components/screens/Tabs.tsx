import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CoursesScreen from './CoursesScreen';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const route = useRoute();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Lớp học" component={CoursesScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Tài khoản" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
