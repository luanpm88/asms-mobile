// Topbar.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import globalStyles from '../constants/styles';
import Notification from './system/notifications/Notification';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { populateTestNotifications } from '@/app/reducer/features/notifications/notificationsSlice';
import { useRouter } from 'expo-router';

const Topbar = ({ notificationCount = "9+", name }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // import initial notifications
    dispatch(populateTestNotifications());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/images/avatar.jpg")}
          style={styles.avatar}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.sub}>Good morning,</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <TouchableOpacity
      // previous version, when press on this icon, show notifications modal
        // onPress={() => showModal()}
        onPress={() => {
          router.push({
            pathname: '/(screens)/notification',
          })
        }}
        style={[
          {
            marginRight: 20,
            backgroundColor: Colors.white,
            padding: 10,
            borderRadius: 50,
            // Inline shadow styles
            shadowColor: "#E5E4E4",
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          globalStyles.shadow, // Import shadow styles from globalStyles
        ]}
      >
        <Feather name="bell" size={24} color={Colors.black} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{notificationCount}</Text>
        </View>
      </TouchableOpacity>

      {/* Notification modal */}
      {/* <Notification
        visible={modalVisible}
        onClose={hideModal}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: Colors.white,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: Colors.colorText,
    fontWeight: "700",
    // fontFamily: 'custom-font',
  },
  sub: {
    flex: 1,
    fontSize: 14,
    color: Colors.colorText,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 15,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 1,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  badgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
});

export default Topbar;
