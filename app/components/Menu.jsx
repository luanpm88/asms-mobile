import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Colors from "../constants/Colors";
import globalStyles from '../constants/styles'

const categories = [
  { id: '1', title: 'Thời khóa biểu', iconName: require('../../assets/images/clock.png')},
  { id: '2', title: 'Khóa học', iconName: require('../../assets/images/class.png')},
  { id: '3', title: 'Hợp đồng', iconName: require('../../assets/images/contract.png')}, 
  { id: '4', title: 'Du học', iconName: require('../../assets/images/abroad.png')},
  { id: '5', title: 'Hồ sơ', iconName: require('../../assets/images/profile.png')}, 
  { id: '6', title: 'Công nợ', iconName: require('../../assets/images/payment.png')},
  { id: '7', title: 'Hệ thống', iconName: require('../../assets/images/system.png')},
  { id: '8', title: 'Kết quả học tập', iconName: require('../../assets/images/report.png')},
  { id: '9', title: 'Báo cáo', iconName: require('../../assets/images/result.png')},
];

const Menu = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryBtn}
            >
              <View style={styles.outerBorder}>
              <View style={[globalStyles.shadow, styles.innerBorder]}>
                  <Image
                    source={item.iconName}
                    style={styles.avatar}
                  />
                </View>
              </View>
              <Text style={styles.categoryBtnTxt}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryBtn: {
    width: '25%', 
    paddingTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryBtnTxt: {
    color: Colors.black,
    marginTop: 10,
    textAlign: 'center',
  },
  outerBorder: {
    borderRadius: 10,
  },
  innerBorder: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
  },
});

export default Menu;
