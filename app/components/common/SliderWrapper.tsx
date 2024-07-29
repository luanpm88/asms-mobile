import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ReactSwiper from '../base/ReactSwiper';

interface HasId {
  id: string | number;
}

interface SliderWrapperProps<T> {
  title: string;
  SliderCard: React.ComponentType<{ data: T }>;
  data: T[];
}

const SliderWrapper = <T extends HasId>({ title, SliderCard, data }: SliderWrapperProps<T>) => {
  const [isSlideBegin, setIsSlideBegin] = useState(true);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

  const handleIndexChanged = (index: number) => {
    setIsSlideBegin(index === 0);
    setIsSlideEnd(index === data.length - 1);
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            onPress={() => swiperRef.current?.scrollBy(-1)}
            title="Prev"
            disabled={isSlideBegin}
          />
          <Button
            onPress={() => swiperRef.current?.scrollBy(1)}
            title="Next"
            disabled={isSlideEnd}
          />
        </View>
      </View>

      <ReactSwiper
        slidesPerView={1} // Adjust as needed; react-native-swiper doesn't use `slidesPerView`
        onIndexChanged={handleIndexChanged}
      >
        {data.map((item) => (
          <View key={item.id}>
            <SliderCard data={item} />
          </View>
        ))}
      </ReactSwiper>
    </View>
  );
};

export default SliderWrapper;
