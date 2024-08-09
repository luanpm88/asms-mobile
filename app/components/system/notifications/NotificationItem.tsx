import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

interface NotificationItemProps {
  title: string;
  date: string;
  info: string;
  titleIcon?: React.ReactNode;
  timeIcon?: React.ReactNode;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, date, info, titleIcon, timeIcon }) => {
  return (
    <View style={styles.notificationItem}>
      <View style={styles.titleContainer}>
        {titleIcon} 
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <View style={styles.titleContainer}>
        {timeIcon} 
        <Text style={styles.itemDate}>{date}</Text>
      </View>
      <Text style={styles.itemInfo}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  itemDate: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
    marginVertical: 2,
  },
  itemInfo: {
    fontSize: 14,
    color: '#333',
  },
});

export default NotificationItem;
