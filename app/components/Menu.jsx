import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../constants/Colors";


const categories = [
  { id: '1', title: 'Thời khóa biểu', iconName: 'calendar-alt' },
  { id: '2', title: 'Sổ liên lạc', iconName: 'file' },
  { id: '3', title: 'Kết quả học tập', iconName: 'address-card' },
  { id: '4', title: 'Học phí', iconName: 'money-bill-alt' },
  { id: '5', title: 'Báo cáo', iconName: 'file-alt' },
];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelectCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleSelectCategory(index)}
            style={activeIndex === index ? styles.categoryBtnActive : styles.categoryBtn}
          >
            <FontAwesome5  name={item.iconName} size={24} 
            color={activeIndex === index ? Colors.primaryColor : Colors.black}/>
            
            <Text style={activeIndex === index ? styles.categoryBtnTxtActive : styles.categoryBtnTxt}>
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
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBtn: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  categoryBtnActive: {
    padding: 10,
    
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  categoryBtnTxt: {
    color: Colors.black,
    marginTop: 5,
  },
  categoryBtnTxtActive: {
    color: Colors.primaryColor,
    marginTop: 5,
  },
});

export default Categories;
