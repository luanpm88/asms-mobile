import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Topbar = ({ notificationCount = 9 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://gravatar.com/avatar/cf2ddcd2f75e0eefb35cb55db283fecf?s=400&d=robohash&r=x' }} 
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>Pham Tung Anh</Text>
      <View style={styles.notificationContainer}>
      <FontAwesome name="bell" size={30} color="Colors.black" />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    color: Colors.white,
  },
  avatarContainer: {
    marginRight: 10, 
  },
  avatar: {
    width: 50, 
    height: 50,
    borderRadius: 20,
  },
  name: {
    flex: 1, 
    fontSize: 20,
    color: Colors.black,
  },
  notificationContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: Colors.red,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
  },
  badgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Topbar;
