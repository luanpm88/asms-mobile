import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Chip, ProgressBar } from 'react-native-paper';
import { rows } from '../../../../data/taskOverview'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionMenu from './ActionMenu';

const iconMap = {
  'in progress': 'autorenew', 
  completed: 'check-circle', 
  pending: 'hourglass-empty',
  default: 'help-outline', 
};
const colorMap = {
  'in progress': 'blue',
  completed: 'green',
  pending: 'orange',
  default: 'gray'
};
const TaskOverviewTable = ({ searchText }) => {
  const filteredRows = rows.filter(row =>
    row.task.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={[styles.cells, styles.taskCell]}>
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
     
      <View style={styles.cell}>
        <Text style={styles.progressText}>{item.progress}%</Text>
        <ProgressBar progress={item.progress / 100} style={styles.progressBar} />
      </View>
      <View style={styles.cell}>
        <Icon
          name={iconMap[item.status] || iconMap.default}
          size={24}
          color={colorMap[item.status] || colorMap.default}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.timeLeftText}>{item.timeLeft}</Text>
      </View>
      <View style={styles.cell}>
        <ActionMenu itemId={item.id} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={filteredRows}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
  },
  taskCell: {
    width: '40%',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 4,
    backgroundColor: '#e0e0e0',
  },
  progressBar: {
    marginTop: 4,
    height: 5,
    width: '100%',
  },
  chip: {
    margin: 4,
  },
  taskText: {
    fontSize: 16,
  },
  progressText: {
    fontSize: 16,
  },
  timeLeftText: {
    fontSize: 16,
  },
});

export default TaskOverviewTable;
