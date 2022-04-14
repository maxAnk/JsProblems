/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';



import { useDispatch , useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/counts'



const App = () => { 

  const dispatch = useDispatch();
  const {incrementCount,decrementCount} = bindActionCreators(actionCreators,dispatch);
  const count = useSelector(state => state.count);

    return (
            <View styles={styles.container}>
              <Button
                title="increment"
                onPress={() => incrementCount(100)}
              />
              
              <Text>{count}</Text>
              <Button
                title="decrement"
                onPress={() => decrementCount(100)}
              />
            </View>
            )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default App
