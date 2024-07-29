import { useState } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconifyIcon from '../../../base/IconifyIcon';
import ActivityChart from './ActivityChart';

const chartData = {
  thisWeek: [1.7, 2, 1.4, 3, 1.8, 2.4, 1.9],
  lastWeek: [1.3, 2, 1, 3, 1, 2.6, 2.8],
  twoWeeksAgo: [2.9, 2.5, 3, 1, 2, 1, 2],
};

const Activity = () => {
  const [data, setData] = useState(chartData.thisWeek);
  const [week, setWeek] = useState('this-week');

  // const handleSelectChange = (itemValue) => {
  //   setWeek(itemValue);
  //   if (itemValue === 'this-week') {
  //     setData(chartData.thisWeek);
  //   } else if (itemValue === 'last-week') {
  //     setData(chartData.lastWeek);
  //   } else {
  //     setData(chartData.twoWeeksAgo);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        {/* <Picker
          selectedValue={week}
          onValueChange={handleSelectChange}
          style={styles.picker}
        >
          <Picker.Item label="This Week" value="this-week" />
          <Picker.Item label="Last Week" value="last-week" />
          <Picker.Item label="Two Weeks Ago" value="two-weeks-ago" />
        </Picker> */}
      </View>
      <View style={styles.chartContainer}>
        <ActivityChart data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  picker: {
    height: 40,
    width: 150,
  },
  chartContainer: {
    marginTop: 20,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
  },
});

export default Activity;