import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from "expo-router";
import Topbar from '../components/Topbar';
import Slider from '../components/Slider';
import Menu from '../components/Menu';
import SectionRecent from '../components/SectionRecent';
import { Divider } from 'react-native-paper';

import Colors from "../constants/Colors";

export default function HomeScreen() {
    const router = useRouter();

    const goToSettings = () => {
        router.push('/settings');
    };
  return (
    <ScrollView >
      <Topbar/>
      <Divider style={styles.divider} />
      <Slider/>
      <Menu/>
      <Divider style={styles.divider} />
      <SectionRecent/>
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 2,
    backgroundColor: Colors.divider,
  },
});