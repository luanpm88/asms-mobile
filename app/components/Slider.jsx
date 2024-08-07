import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const data = [
  {
    title: '11',
    uri: 'https://via.placeholder.com/400x300.png?text=First+Page',
  },
  {
    title: '2',
    uri: 'https://via.placeholder.com/400x300.png?text=Second+Page',
  },
  {
    title: '3',
    uri: 'https://via.placeholder.com/400x300.png?text=Third+Page',
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
    padding: 20,
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
  },
});

export default Slider;
