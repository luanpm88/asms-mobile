import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TaskOverviewTable from './TaskOverviewTable';

const TaskOverview = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Overview</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Task"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          
          <Icon name="search" size={20} color="gray" />
        </View>
      </View>

      <View style={styles.tableContainer}>
        <TaskOverviewTable searchText={searchText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 2,
    width: 250,
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginRight: 8,
  },
  tableContainer: {
    flex: 1,
  },
});

export default TaskOverview;
