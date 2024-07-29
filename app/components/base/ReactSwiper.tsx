import React from 'react';
import Swiper from 'react-native-swiper';
// import 'react-native-swiper/swiper.css'; // Import Swiper styles if needed

export interface ReactSwiperProps {
  slidesPerView: number;
  children: React.ReactNode;
  onIndexChanged?: (index: number) => void;
}

const ReactSwiper = ({ children, slidesPerView, onIndexChanged }: ReactSwiperProps) => {
  return (
    <Swiper
      showsPagination
      loop
      showsButtons
      onIndexChanged={onIndexChanged}
      paginationStyle={{ bottom: 10 }}
      buttonWrapperStyle={{ backgroundColor: 'transparent' }}
      prevButton={<Button>Prev</Button>}
      nextButton={<Button>Next</Button>}
      // Additional props as needed
    >
      {children}
    </Swiper>
  );
};

export default ReactSwiper;
