import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import globalStyles from '../constants/styles'

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
    <Image source={{ uri: item.uri }} style={[globalStyles.shadow, styles.image]}/>
  </View>
);

const Slider = () => {
  return (
    <View style={[globalStyles.shadow, styles.outerContainer]}>
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
  },
  container: {
    flex: 1,
    height: 300,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 15,
  },
  image: {
    width: viewportWidth - 2 * 20, 
    height: 300,
    
  },
});

export default Slider;
