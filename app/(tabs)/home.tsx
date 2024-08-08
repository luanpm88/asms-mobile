import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from "expo-router";
import Topbar from '../components/Topbar';
import Slider from '../components/Slider';
import Menu from '../components/Menu';
import SectionRecent from '../components/SectionRecent';
import CourseRecent from '../components/CourseRecent';
import News from '../components/News';
import { Divider } from 'react-native-paper';

import Colors from "../constants/Colors";

export default function HomeScreen() {
    const router = useRouter();

    const goToSettings = () => {
        router.push('/settings');
    };
  return (
    <View style={styles.container}>
      <View style={styles.topbarContainer}>
        <Topbar />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
      >
        <Divider style={styles.divider} />
        <Slider />
        <Menu />
        <Divider style={{ ...styles.divider, height: 4 }} />
        <SectionRecent />
        <Divider style={{ ...styles.divider, height: 4 }} />
        <CourseRecent />
        <Divider style={{ ...styles.divider, height: 4 }} />
        <News />
      </ScrollView>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  divider: {
    height: 2,
    marginVertical: 10,
    backgroundColor: Colors.divider,
  },
  topbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: Colors.white
  },
  scrollViewContent: {
    paddingTop: 60, 
  },

});