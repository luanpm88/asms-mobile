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
        <Text style={styles.title}>Buổi học tuần này</Text>
        <Text style={{ color: "#4D4D52" }}>5/08 - 11/08</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {sections.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryBtn}>
            <View style={[styles.card, { borderColor: item.color }]}>
              <Text style={styles.codeText}>{item.code}</Text>
              <Text style={styles.sessionText}>Buổi 62: ---</Text>
              <View style={styles.cardContainer}>
                <View style={styles.item}>
                  <View style={styles.iconContainer}>
                    <FontAwesome
                      name="graduation-cap"
                      size={24}
                      color={Colors.white} 
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.itemText}>Trung tâm</Text>
                    <Text style={styles.itemSubText}>Sài Gòn</Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <View style={styles.iconContainer}>
                    <FontAwesome6 name="door-open" size={24} color={Colors.white} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.itemText}>--</Text>
                  </View>
                </View>
              </View>
              <View style={styles.item}>
                <AntDesign style={{ paddingRight: 20 }}name="calendar" size={24} color={Colors.white} />
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
  title: {
    fontSize: 20,
    color: Colors.colorText,
  },
  card: {
    height: 160,
    width: viewportWidth - 40, 
    backgroundColor: Colors.danger,
    padding: 10, 
    borderWidth: 2, 
    marginRight: 10,
    borderRadius: 20,
  },
  codeText: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5, 
  },
  sessionText: {
    fontSize: 14,
    color: Colors.white,
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
    color: Colors.white,
  },
  itemSubText: {
    fontSize: 14,
    color: Colors.white,
  },
});

export default SectionRecent;
