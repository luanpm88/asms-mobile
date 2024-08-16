import { View, StyleSheet, ScrollView } from 'react-native';
import Topbar from '../components/Topbar';
import Slider from '../components/Slider';
import Menu from '../components/Menu';
import SectionRecent from '../components/SectionRecent';
import CourseRecent from '../components/CourseRecent';
import News from '../components/News';
import Share from '../components/Share';
import Colors from "../constants/Colors";
import { useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const { name } = useLocalSearchParams();
  const displayName = Array.isArray(name) ? name[0] : name || "User";

  return (
    <View style={styles.container}>
      <View style={styles.topbarContainer}>
        <Topbar name={displayName} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Slider />
        <Menu />
        <SectionRecent />
        <CourseRecent />
        <News />
        <Share />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.divider,
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
    backgroundColor: Colors.divider
  },
  scrollViewContent: {
    paddingTop: 60, 
  },
});