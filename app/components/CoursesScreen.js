import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { List, Avatar, Divider, Button, Menu, Provider } from 'react-native-paper';

export default function CoursesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    fetch('http://asms-2.com/api/user/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));

  }, []);

  const handleSearchChange = (query) => setSearchQuery(query);

  const handleStatusChange = (status) => {
    setStatusFilter(status);
    setVisible(false);
  };

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

 

  return (
    <Provider>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Danh sách lớp học</Text> */}
        <View style={styles.searchFilterContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search courses..."
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button mode="contained" style={styles.filterButton} onPress={openMenu}>
                Filter
              </Button>
            }
          >
            <Menu.Item onPress={() => handleStatusChange('')} title="All" />
            <Menu.Item onPress={() => handleStatusChange('Chưa học')} title="Chưa học" />
            <Menu.Item onPress={() => handleStatusChange('Đang học')} title="Đang học" />
            <Menu.Item onPress={() => handleStatusChange('Đã học')} title="Đã học" />
            <Menu.Item onPress={() => handleStatusChange('stopped')} title="Dừng lớp" />
          </Menu>
        </View>
        <ScrollView>
          <List.Section>
            {courses
              .filter(course =>
                course.code.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (statusFilter === '' || course.status === statusFilter)
              )
              .map(course => (
                <View key={course.id}>
                  <List.Item
                    title={course.code}
                    description={`Level: ${course.level}, Status: ${course.status}`}
                    left={() => (
                      <Avatar.Image size={48} source={{ uri: 'https://via.placeholder.com/48' }} />
                    )}
                  />
                  <Divider />
                </View>
              ))}
          </List.Section>
        </ScrollView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    flex: 1,
    marginRight: 8,
  },
  filterButton: {
    height: 40,
    justifyContent: 'center',
  },
});
