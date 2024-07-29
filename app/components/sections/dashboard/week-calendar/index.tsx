import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(localizedFormat);
dayjs.extend(isoWeek);

const daysOfWeekLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const WeekCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const startOfCurrentWeek = dayjs(selectedDate).startOf('week');

  const daysOfWeek = Array.from(new Array(7)).map((_, index) =>
    startOfCurrentWeek.add(index, 'day'),
  );

  const handlePrevMonth = () => {
    const newDate = dayjs(selectedDate).subtract(1, 'month');
    setSelectedDate(newDate.toDate());
  };

  const handleNextMonth = () => {
    const newDate = dayjs(selectedDate).add(1, 'month');
    setSelectedDate(newDate.toDate());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth} style={styles.iconButton}>
          <Icon name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {dayjs(selectedDate).format('MMMM YYYY')}
        </Text>
        <TouchableOpacity onPress={handleNextMonth} style={styles.iconButton}>
          <Icon name="arrow-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.daysContainer}>
        {daysOfWeek.map((day, index) => {
          const isToday = day.isSame(new Date(), 'day');
          return (
            <TouchableOpacity
              key={day.format('YYYY-MM-DD')}
              style={[
                styles.dayContainer,
                { backgroundColor: isToday ? '#3f51b5' : '#e0f7fa' },
              ]}
              onPress={() => setSelectedDate(day.toDate())}
            >
              <Text
                style={[
                  styles.dayLetter,
                  { color: isToday ? '#e0f7fa' : '#000' },
                ]}
              >
                {daysOfWeekLetters[index]}
              </Text>
              <View
                style={[
                  styles.dayNumberContainer,
                  { backgroundColor: isToday ? '#303f9f' : '#b2ebf2' },
                ]}
              >
                <Text
                  style={[
                    styles.dayNumber,
                    { color: isToday ? '#e0f7fa' : '#000' },
                  ]}
                >
                  {day.format('D')}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  iconButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 7,
    flex: 1,
    marginHorizontal: 4,
  },
  dayLetter: {
    fontSize: 12,
    fontWeight: '500',
  },
  dayNumberContainer: {
    marginTop: 4,
    height: 32,
    width: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default WeekCalendar;
