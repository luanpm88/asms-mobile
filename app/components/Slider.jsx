import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Colors from "../constants/Colors";

const { width: viewportWidth } = Dimensions.get('window');

const data = [
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

const renderItem = ({ item }) => (
  <View style={styles.slide}>
    <Image source={{ uri: item.uri }} style={styles.image} />
    
  </View>
);

const Slider = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Carousel
          data={data}
          renderItem={renderItem}
          width={viewportWidth - 2 * 20} 
          height={300}
          loop
          autoPlay
          autoPlayInterval={2000}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical:10,
    // borderRadius: 15,

  },
  container: {
    flex: 1,
    height: 300,
  },
  slide: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: viewportWidth - 2 * 20, 
    height: 300,
    borderRadius: 15,
    borderWidth: 2, 
    borderColor: Colors.divider,
  },
});

export default Slider;
