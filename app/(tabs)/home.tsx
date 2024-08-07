import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from "expo-router";
import Topbar from '../components/Topbar';
import Slider from '../components/Slider';
import Menu from '../components/Menu';
import SectionRecent from '../components/SectionRecent';
import { Divider } from 'react-native-paper';

import Colors from "../constants/Colors";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Home Screen</Text>
      <Button title="Go to Settings" onPress={goToSettings} />
    </View>
  );
}
