import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {

    const [enterGoal, setEnterGoal] = useState('');

    const goalInputHandler = (enterdText) => {
        setEnterGoal(enterdText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enterGoal);
        setEnterGoal('');
    }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.textInputContainer}>
                <TextInput placeholder='Course Goal' style={styles.textInput} onChangeText={goalInputHandler} value={enterGoal} />
                <View style={styles.btContainer}>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler}
                        // onPress={props.onAddGoal.bind(this,enterGoal)} // another way
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={props.onCancel} />
                    </View>

                </View>
                {/* <Button title='Clear' onPress={props.onClearGoal} /> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '70%', borderColor: "#000", borderWidth: 1, padding: 10, marginBottom: 10
    },
    btContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "60%"
    },
    button: {
        width: "40%"
    }


})

export default GoalInput