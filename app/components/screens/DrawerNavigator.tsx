import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CoursesScreen from './CoursesScreen';
import OrderScreen from './OrderScreen';
import SectionScreen from './SectionScreen';
import AbroadScreen from './AbroadScreen';
import ExtracurricularScreen from './ExtracurricularScreen';
import CustomDrawerContent from './CustomDrawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return  (
    
    // <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Navigator >
      <Drawer.Screen name="Trang chủ" component={HomeScreen} />
      <Drawer.Screen name="Hợp đồng" component={OrderScreen} />
      <Drawer.Screen name="Thời khóa biểu" component={SectionScreen} />
      <Drawer.Screen name="Đào tạo" component={CoursesScreen} options={{ headerShown: true }} />
      <Drawer.Screen name="Ngoại khóa" component={ExtracurricularScreen} />
      <Drawer.Screen name="Du học" component={AbroadScreen} />
      <Drawer.Screen name="Tài khoản" component={ProfileScreen} />
      
    </Drawer.Navigator>
    
  );
  
}

const styles = StyleSheet.create({
    
  container: {
      flex: 1,
  },
});