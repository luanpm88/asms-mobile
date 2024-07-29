import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
// import { Icon } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Avatar } from 'react-native-elements';

const taskDetails = [
  {
    id: 1,
    details: 'Understanding the tools in Figma',
  },
  {
    id: 2,
    details: 'Understand the basics of making designs',
  },
  {
    id: 3,
    details: 'Design a mobile application with figma',
  },
];

const TaskToday = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>Task Today</Text>
        
        <Ionicons name="menu" size={24} color="black" />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Creating Awesome Mobile Apps</Text>
          <Text style={styles.subtitleSecondary}>UI / UX Designer</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Progress</Text>
            <Text style={styles.progress}>80%</Text>
          </View>
          <Slider
            value={80}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#1E90FF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#1E90FF"
          />
        
        </View>
        <View style={styles.section}>
          <View style={styles.row}>
            <Ionicons name="timer" size={24} color="gray" />
            <Text style={styles.label}>1 Hour</Text>
          </View>
          <View style={styles.avatarGroup}>
            <Avatar rounded source={{ uri: 'https://i.pravatar.cc/100' }} />
            <Avatar rounded source={{ uri: 'https://i.pravatar.cc/100' }} />
            <Avatar rounded source={{ uri: 'https://i.pravatar.cc/100' }} />
            <Avatar rounded source={{ uri: 'https://i.pravatar.cc/100' }} />
            <Avatar rounded source={{ uri: 'https://i.pravatar.cc/100' }} />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.detailTitle}>Detail Task</Text>
          <Text style={styles.subtitleSecondary}>UI / UX Designer</Text>
        </View>
        <View style={styles.taskList}>
          {taskDetails.map((task) => (
            <View key={task.id} style={styles.taskItem}>
              <View style={styles.taskNumber}>
                <Text style={styles.taskNumberText}>{task.id}</Text>
              </View>
              <Text style={styles.taskDetails}>{task.details}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.cardActions}>
        <Button title="Go To Detail" onPress={() => {}} color="#1E90FF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 160,
    width: '100%',
  },
  cardContent: {
    padding: 15,
  },
  section: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitleSecondary: {
    fontSize: 14,
    color: 'gray',
  },
  label: {
    fontSize: 14,
  },
  progress: {
    fontSize: 14,
    color: '#1E90FF',
    fontWeight: '600',
  },
  avatarGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  divider: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E90FF',
  },
  taskList: {
    marginTop: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskNumber: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  taskNumberText: {
    color: 'white',
    fontWeight: '500',
  },
  taskDetails: {
    fontSize: 14,
  },
  cardActions: {
    padding: 15,
  },
});

export default TaskToday;
