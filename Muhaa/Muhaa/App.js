

import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { enableScreens } from 'react-native-screens';

import MainNavigator from './navigation/MainNavigator';


enableScreens(); // good practice

const App = () => {

  return (
    <MainNavigator />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    // Below is the custom font
    fontFamily: 'DancingScript-Bold',
    // fontFamily: 'DancingScript-Regular'
  }
})

export default App;
