import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RunningTaskChart from './RunningTaskChart'; // Make sure this uses React Native components

const chartData = [
  {
    value: 45,
    detail: {
      valueAnimation: false,
      offsetCenter: ['0%', '0%'],
    },
  },
];

const RunningTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>Running Task</Text>
        <Text style={styles.value}>65</Text>
      </View>
      <View style={styles.chart}>
        <RunningTaskChart data={chartData} />
        <View style={styles.taskInfo}>
          <Text style={styles.taskValue}>100</Text>
          <Text style={styles.taskLabel}>Task</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    flex: 1,
    maxWidth: 130,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  chart: {
    flex: 1,
    alignItems: 'center',
  },
  taskInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  taskValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  taskLabel: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
});

export default RunningTask;
