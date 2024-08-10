import React from 'react';
import { View, Text, Image, StyleSheet,   TouchableOpacity, } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Topbar = ({ notificationCount = '9+' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../assets/images/avatar.jpg')} 
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>Pham Tung Anh</Text>
     
      <TouchableOpacity
          onPress={() => {}}
          style={{
            marginRight: 20,
            backgroundColor: '#FE4B4B',
            padding: 10,
            borderRadius: 50,
            shadowColor: "#F8F8F8",
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          
          <FontAwesome name="bell" size={30} color={Colors.white} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    borderRadius: 10,
  },
  name: {
    flex: 1, 
    fontSize: 20,
    color: Colors.colorText,
  },
  
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FE4B4B',
    borderRadius: 15,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
    borderWidth: 2, 
    borderColor: '#FFFFFF',
  },
  badgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    
  },
});

export default Topbar;
