import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { FontAwesome, FontAwesome6, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Carousel from 'react-native-reanimated-carousel';

const news = [
  {
    title: '1',
    uri: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
  },
  {
    title: '2',
    uri: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
  },
  {
    title: '3',
    uri: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
  },
];

const viewportWidth = Dimensions.get("window").width;
const renderItem = ({ item }) => (
  <View style={styles.slide}>
    <Image source={{ uri: item.uri }} style={styles.image} />
    <Text style={styles.slideTitle}> sdfdds{item.title}</Text>
  </View>
);

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tin tức & sự kiện</Text>
        <Text style={[styles.title, { color: Colors.danger }]}>Xem tất cả</Text>
      </View>

      <Carousel
        data={news}
        renderItem={renderItem}
        width={viewportWidth - 40} 
        height={300}
        loop
        style={styles.carousel}
        pagingEnabled={true}
        mode="parallax"
        
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: Colors.danger,
  },
  carousel: {
    flexGrow: 0,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  slideTitle: {
    // position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 45,
    borderRadius: 5,
  },
});

export default News;
