import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { FontAwesome, FontAwesome6, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors"; // Assuming Colors is defined in your project
import Slider from "@react-native-community/slider";

const sections = [
  {
    id: "1",
    code: "ADV.IELTS.2408.001",
    subject: "Advanced - IELTS",
    iconName: "calendar-alt",
    color: Colors.danger,
  },
  {
    id: "2",
    code: "UIN.IELTS.2407.001",
    subject: "Upper inter - IELTS",
    iconName: "file",
    color: Colors.yellow,
  },
  {
    id: "3",
    code: "KET.2406.004",
    subject: "KET",
    iconName: "address-card",
    color: Colors.purple,
  },
];

const { width } = Dimensions.get("window");
const CourseRecent = () => {
  const [value, setValue] = useState(30);
  const [sliderWidth, setSliderWidth] = useState(0);
  const thumbPosition = (value / 100) * (sliderWidth - 40);
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Lớp học gần đây</Text>
      </View> */}
      <View style={styles.iconContainer}>
        
      
        <Text style={styles.title}><Icon name="book" size={20} color="green" />Lớp đang học</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {sections.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryBtn}>
            <View style={styles.card}>
              <View style={[styles.item, { marginVertical: 10 }]}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../../assets/images/react-logo.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.codeText}>{item.code}</Text>
                  <Text style={styles.sessionText}>{item.subject}</Text>
                </View>
              </View>

              <View style={styles.sliderContainer}>
                <View style={[styles.badgeContainer, { left: thumbPosition }]}>
                  <Text style={styles.badgeText}>Đã học {Math.round(value)} buổi</Text>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={100}
                  thumbTintColor = {Colors.secondaryColor}
                  minimumTrackTintColor={Colors.primaryColor}
                  maximumTrackTintColor={Colors.divider}
                  value={value}
                  onValueChange={(val) => setValue(val)}
                  onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)}
                />
              </View>

              <View style={styles.item}>
                <AntDesign
                  style={{ paddingRight: 20 }}
                  name="calendar"
                  size={24}
                  color={Colors.colorText}
                />
                <Text style={styles.itemText}>Bài học trước</Text>
              </View>
              <View style={styles.item}>
                <AntDesign
                  style={{ paddingRight: 20 }}
                  name="calendar"
                  size={24}
                  color={Colors.colorText}
                />
                <Text style={styles.itemText}>FINAL TEST - TEST DAY</Text>
              </View>
              <View style={styles.item}>
                <AntDesign
                  style={{ paddingRight: 20 }}
                  name="calendar"
                  size={24}
                  color={Colors.colorText}
                />
                <Text style={styles.itemText}>Nhận xét của giáo viên</Text>
              </View>
              <View style={styles.item}>
                
                <Text style={styles.itemText}>---</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    color: Colors.colorText,
  },
  card: {
    height: 260,
    width: width - 40,
    backgroundColor: Colors.bgCard,
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  codeText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.danger,
    marginBottom: 5,
  },
  sessionText: {
    fontSize: 14,
    color: Colors.colorText,
    paddingVertical: 5,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    paddingBottom: 5,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 5,
    color: Colors.colorText,
  },
  itemSubText: {
    fontSize: 14,
    color: Colors.colorText,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  slider: {
    width: width - 60,
    height: 10,
    paddingVertical: 20,
  },
  badgeContainer: {
    position: 'absolute',
    top: -35, 
    alignItems: 'center',
  },
  badgeText: {
    backgroundColor: Colors.primaryColor,
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    // paddingHorizontal: 10,
  },
});

export default CourseRecent;
