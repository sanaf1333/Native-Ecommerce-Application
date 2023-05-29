/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Login from './src/components/screens/login';
import Signup from './src/components/screens/signup';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>sana</Text>
      <Signup />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
