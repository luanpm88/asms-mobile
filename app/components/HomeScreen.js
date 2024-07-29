import React from 'react';
import { Platform, Text, View, StyleSheet, ScrollView } from 'react-native';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Activity from '../components/sections/dashboard/activity';
import TaskToday from '../components/sections/dashboard/task-today';
import RunningTask from '../components/sections/dashboard/running-task';
import UpcomingTask from '../components/sections/dashboard/upcoming-task';
import WeekCalendar from '../components/sections/dashboard/week-calendar';
import TaskOverview from '../components/sections/dashboard/task-overview';
import MonthlyMentors from '../components/sections/dashboard/monthly-mentors';
// import Footer from '../components/common/Footer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        {/* <View style={styles.tasksContainer}>
          <RunningTask />
          <Activity />
        </View>
        <MonthlyMentors />
        <UpcomingTask /> */}
        <TaskOverview />
      </View>

      <ScrollView style={styles.sidebar} contentContainerStyle={styles.sidebarContent}>
        
      <TaskOverview />
        <WeekCalendar />
        <TaskToday />
        <UpcomingTask />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    padding: 5,
  },
  tasksContainer: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  sidebar: {
    width: 460,
    backgroundColor: '#f5f5f5', 
  },
  sidebarContent: {
    padding: 5,
  },
});
const componentStyles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
});


export default HomeScreen;
