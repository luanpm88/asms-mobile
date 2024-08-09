import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  EvilIcons
} from "react-native";
import { FontAwesome, FontAwesome6, AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import globalStyles from "../constants/styles";



const viewportWidth = Dimensions.get("window").width;


const News = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.title}>Chia sẻ ứng dụng</Text>
        <Text style={styles.description}>Cùng chia sẻ ứng ứng dụng này tới bạn bè của bạn nhé!</Text>
      </View>
      <View style={[globalStyles.shadow, styles.card]}>
        <Ionicons name="share-social-outline" size={24} color={Colors.colorText} />
        <Text style={styles.textCard}>Chia sẻ ứng dụng</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: Colors.colorText,
    marginVertical: 10, 
    fontSize: 18,
    fontWeight: '600'
  },
  description:{
    color: Colors.colorText,
    opacity: 0.5,
  },
  card: {
    marginVertical:15,
    width: viewportWidth - 20 * 2, 
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: Colors.white
  },
  textCard:{
    color: Colors.colorText,
    opacity: 0.9,
    marginLeft: 10,
  }
  

});

export default News;
