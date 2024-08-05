import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.avatarImage} />
        </View>
        <View style={styles.avatarInfoContainer}>
          <Text style={styles.avatarInfo}>Thư</Text>
          <Text style={styles.avatarInfo}>thuvm@gmail.com</Text>
        </View>
      </View>
      <View style={styles.drawerItems}>
        {props.state.routes.map((route, index) => (
          <Text key={index} style={styles.drawerItem}>
            {route.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    width: '100%',
    paddingTop: 50,
    padding: 16,
    backgroundColor: '#f5f5f5', 
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarInfoContainer: {
    alignItems: 'center',
  },
  avatarInfo: {
    fontSize: 16,
    color: '#000', 
  },
  drawerItems: {
    flex: 1,
    backgroundColor: '#fff', 
    padding: 16,
  },
  drawerItem: {
    fontSize: 16,
    paddingVertical: 16,
    color: '#000',
    
  },
});

export default CustomDrawerContent;
