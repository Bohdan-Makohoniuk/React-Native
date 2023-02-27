import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React-Native!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
