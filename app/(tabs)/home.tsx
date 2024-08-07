import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World!</Text>
      <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
    </View>
  );
}
