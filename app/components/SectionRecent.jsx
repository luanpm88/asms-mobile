import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome, FontAwesome6, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import globalStyles from '../constants/styles'

const sections = [
  {
    id: "1",
    code: "ADV.IELTS.2408.001",
    iconName: "calendar-alt",
    color: Colors.danger,
  },
  {
    id: "2",
    code: "UIN.IELTS.2407.001",
    iconName: "file",
    color: Colors.yellow,
  },
  {
    id: "3",
    code: "KET.2406.004",
    iconName: "address-card",
    color: Colors.purple,
  },
];

const viewportWidth = Dimensions.get("window").width;

const SectionRecent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Buổi học tuần này</Text>
        <Text style={{ color: Colors.colorText }}>5/08 - 11/08</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {sections.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryBtn}>
            <View style={[globalStyles.shadow, styles.card]}>
              <Text style={styles.codeText}>{item.code}</Text>
              {/* <Text style={styles.sessionText}>Buổi 62: ---</Text> */}
              <View style={styles.cardContainer}>
                <View style={styles.item}>
                  <View style={styles.iconContainer}>
                    <FontAwesome
                      name="graduation-cap"
                      size={24}
                      color={Colors.colorText} 
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.itemText}>Trung tâm</Text>
                    <Text style={styles.itemSubText}>Sài Gòn</Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <View style={styles.iconContainer}>
                    <FontAwesome6 name="door-open" size={24} color={Colors.colorText} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.itemText}>--</Text>
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <AntDesign style={{ paddingRight: 20 }}name="calendar" size={24} color={Colors.colorText} />
                <Text style={styles.itemText}>T7 10/08, 16:20 -17:50</Text>
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
    height: 140,
    width: viewportWidth - 40*2, 
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, 
    marginRight: 10, 
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
});

export default SectionRecent;
