import React, { useRef, useEffect } from 'react';
import { Text, StyleSheet, Pressable, Animated, Dimensions, Easing, ScrollView } from 'react-native';
import Colors from '../../../constants/Colors';
import NotificationItem from './NotificationItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { removeNotification } from '@/app/reducer/features/notifications/notificationsSlice';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 60;
const Notification = ({ visible, onClose }: any) => {
  const translateX = useRef(new Animated.Value(-width)).current;
  const dispatch: AppDispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

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
      <ScrollView style={styles.notificationList}>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            date={notification.date}
            info={notification.info}
            titleIcon={notification.titleIcon}
            timeIcon={notification.timeIcon}
            onDelete={() => dispatch(removeNotification(index))}
          />
        ))}
      </ScrollView>
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

export default Notification;
