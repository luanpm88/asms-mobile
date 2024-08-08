import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../constants/Colors";

const categories = [
  { id: '1', title: 'Thời khóa biểu', iconName: 'calendar-alt', color: Colors.danger },
  { id: '2', title: 'Sổ liên lạc', iconName: 'file', color: Colors.yellow },
  { id: '3', title: 'Kết quả học tập', iconName: 'address-card', color: Colors.purple },
  { id: '4', title: 'Học phí', iconName: 'money-bill-alt', color: Colors.success },
  { id: '5', title: 'Báo cáo', iconName: 'file-alt', color: Colors.blue },
];

const Menu = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryBtn}
          >
            <View style={[styles.outerBorder, { borderColor: item.color }]}>
              <View style={[styles.innerBorder, { backgroundColor: `${item.color}33` }]}>
                <FontAwesome5
                  name={item.iconName}
                  size={24}
                  color={item.color}
                />
              </View>
            </View>
            <Text style={styles.categoryBtnTxt}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  categoryBtn: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
    maxWidth: 100, 
  },
  categoryBtnTxt: {
    color: Colors.black,
    marginTop: 5,
    textAlign: 'center',
    flexWrap: 'wrap', 
  },
  outerBorder: {
    borderRadius: 10, 
    padding: 7, 
  },
  innerBorder: {
    borderRadius: 10, 
    padding: 10, 
  },
});

export default Menu;
