import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SectionScreen</Text>
    </View>
  )
}

export default SectionScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  