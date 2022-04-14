/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,//avoid if list is long
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View

} from 'react-native';


import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';




const App = () => {


  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState('')



  const addGoalHandler = (goalTitle) => {
    // setCourseGoals([...courseGoals, enterGoal]);
    // setCourseGoals(currentGoals => [...currentGoals, enterGoal]); //best

    if (goalTitle.length === 0) return


    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle
      }]);   //Math.random().toString()
    setIsAddMode(false)

  }


  const clearGoals = () => {
    setCourseGoals([])
    // setEnterGoal('')
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId); //filter autometically gives new array 
    })
  }

  const CancelGoal = () => {
    setIsAddMode(false);
  }

  return (
    <SafeAreaView>
      {/* <ScrollView> */}

      <View View View style={styles.screen} >
        <Button title='ADD A NEW GOAL' onPress={() => setIsAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onClearGoal={clearGoals} onCancel={CancelGoal} />
        <View>
          {/* {courseGoals.map((goal, i) => { return <Text>{goal}</Text> })} */}
          {/* {courseGoals.map((goal, i) => <Text style={styles.listItems} key={i}>{goal}</Text>)} */}

          <FlatList

            keyExtractor={(item, index) => item.id}
            data={courseGoals} renderItem={items => (

              <GoalItem id={items.item.id} onDelete={removeGoalHandler} title={items.item.value} />

            )} />

        </View>
      </View >
      {/* </ScrollView> */}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10
  }

});

export default App;
