import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { FontAwesome, FontAwesome6, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors"; 
import Slider from "@react-native-community/slider";
import globalStyles from '../constants/styles'
import ProgressBar from 'react-native-progress/Bar';
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
const attendedClasses = 10;
const totalClasses = 30;
const progress = attendedClasses / totalClasses;
const { width } = Dimensions.get("window");
const CourseRecent = () => {
  const [value, setValue] = useState(30);
  const [sliderWidth, setSliderWidth] = useState(0);
  const thumbPosition = (value / 100) * (sliderWidth - 40 * 2);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Lớp học gần đây</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {sections.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryBtn}>
            <View style={[globalStyles.shadow, styles.card]}>
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
              
                {/* <View style={[styles.badgeContainer, { left: thumbPosition }]}>
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
                /> */}
                <Text style={styles.subtitle}>
                Attended {attendedClasses} out of {totalClasses} classes
              </Text>
              <ProgressBar
                progress={progress}
                width={ width - 60 * 2}
                height={10}
                color="#4caf50"
                backgroundColor="gray"
                borderWidth={0}
                style={styles.progressBar}
              />
              {/* <Text style={styles.progressText}>{(progress * 100).toFixed(2)}% Complete</Text> */}
              </View>
              

              <View style={styles.item}>
                <MaterialCommunityIcons 
                style={{ paddingRight: 20 }}
                name="book-edit-outline" size={24} color={Colors.colorText}/>
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
                  name="question"
                  size={24}
                  color={Colors.colorText}
                />
                <Text style={styles.itemText}>Something</Text>
              </View>
              
              <View style={styles.item}> 
                <FontAwesome 
                  style={{ paddingRight: 20 }} 
                  name="comments-o" size={24} 
                  color={Colors.colorText}/>
                <Text style={styles.itemText}>Nhận xét của giáo viên</Text>
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
  
  card: {
    height: 250,
    width: width - 40 * 2, 
    backgroundColor: Colors.white,
    padding: 15, 
    borderRadius: 20,
  },
  categoryBtn: {
    paddingRight: 15, 
    paddingVertical: 5,
    marginLeft:2,
    borderRadius: 20,
  },
  codeText: {
    fontSize: 16,
    marginBottom: 5, 
    color: Colors.colorText,
    fontWeight: "600",
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
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
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
    width: width - 50 * 2, 
    height: 10,
    paddingVertical: 20,
  },
  badgeContainer: {
    position: 'absolute',
    top: -30, 
    alignItems: 'center',
    
  }, 
  badgeText: {
    backgroundColor: Colors.primaryColor,
    color: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: '600',
  },
  scrollContainer: {
    // paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CourseRecent;
