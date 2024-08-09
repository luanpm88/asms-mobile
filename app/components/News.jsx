import React from "react";
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
import Colors from "../constants/Colors";
import Carousel from "react-native-reanimated-carousel";
import globalStyles from "../constants/styles";

const news = [
  {
    title: "ABC 1",
    uri: `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    title: "2",
    uri: `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    title: "3",
    uri: `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
];

const viewportWidth = Dimensions.get("window").width;
const renderItem = ({ item }) => (
  <View >
    <Image source={{ uri: item.uri }} style={styles.image} />
    <Text style={styles.slideTitle}>{item.title}</Text>
  </View>
);

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Tin tức & sự kiện</Text>
        <Text style={{color: Colors.colorText }}>Xem tất cả</Text>
      </View>
      <View style={globalStyles.shadow}>
        <View style={styles.carousel}>
          <Carousel
            data={news}
            renderItem={renderItem}
            width={viewportWidth - 40}
            height={230}
            loop
            pagingEnabled={true}
            mode="parallax"
          />
        </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
 
  image: {
    width: '100%',
    height: 230,
    borderRadius: 8,
  },
  slideTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },

});

export default News;
