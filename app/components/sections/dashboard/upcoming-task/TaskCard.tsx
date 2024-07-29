import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Avatar } from 'react-native-paper';

const TaskCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.thumb }} style={styles.image} />
      <View style={styles.cardContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.category}>{data.category}</Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Progress</Text>
            <Text style={styles.progressValue}>{data.progress}%</Text>
          </View>
          <Slider
            value={data.progress}
            minimumValue={0}
            maximumValue={100}
            step={1}
            disabled
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#b9e4c9"
            style={styles.slider}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.timeLeftContainer}>
            <Text style={styles.icon}>🕒</Text>
            <Text style={styles.timeLeft}>{data.daysLeft} Days Left</Text>
          </View>
          <ScrollView horizontal>
            {data.avatars.map((avatar, index) => (
              <Avatar.Image key={index} source={{ uri: avatar }} size={32} style={styles.avatar} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    marginVertical: 8,
    overflow: 'hidden',
  },
  image: {
    height: 110,
    width: '100%',
  },
  cardContent: {
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1fb28a',
  },
  slider: {
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginRight: 4,
  },
  timeLeft: {
    fontSize: 14,
    fontWeight: '500',
  },
  avatar: {
    marginRight: 4,
  },
});

export default TaskCard;
