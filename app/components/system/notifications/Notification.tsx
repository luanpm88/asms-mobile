import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, Dimensions, Easing } from 'react-native';
import Colors from '../../../constants/Colors';
import NotificationItem from './NotificationItem';
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 60;

const NotificationModal = ({ visible, onClose }: any) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.modalView, { transform: [{ translateX }] }]}>
      <Text style={styles.modalTitle}>Thông báo</Text>
      <View style={styles.notificationList}>
        <NotificationItem
          title="Sổ liên lạc điện tử"
          date="07/08/2024"
          info="Thông tin sổ liên lạc điện tử ngày 07/08 đã được cập nhật."
          titleIcon={<Entypo name="book" size={20} color={Colors.danger} />}
          timeIcon={<Entypo name="clock" size={13} color={Colors.colorText} />}
        />
        <NotificationItem
          title="Sổ liên lạc điện tử"
          date="09/08/2024"
          info="Thông tin sổ liên lạc điện tử ngày 09/08 đã được cập nhật."
          titleIcon={<Entypo name="book" size={20} color={Colors.danger} />}
          timeIcon={<Entypo name="clock" size={13} color={Colors.colorText} />}
        />
        <NotificationItem
          title="Sổ liên lạc điện tử"
          date="10/08/2024"
          info="Thông tin sổ liên lạc điện tử ngày 010/08 đã được cập nhật."
          titleIcon={<Entypo name="book" size={20} color={Colors.danger} />}
          timeIcon={<Entypo name="clock" size={13} color={Colors.colorText} />}
        />
      </View>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={onClose}
      >
        <Text style={styles.textStyle}>Đóng</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.95,
    height: height - HEADER_HEIGHT - FOOTER_HEIGHT,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  notificationList: {
    flex: 1,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: Colors.danger,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default NotificationModal;
