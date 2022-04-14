import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {

    const [enterValue, setEnterValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectNumber, setSelectNumber] = useState('');

    const numberInputHandler = inputText => {

        setEnterValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnterValue('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enterValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("invalid number", "Number should 1 to 99", [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectNumber(parseInt(enterValue));
        setEnterValue('');
        Keyboard.dismiss();
    }


    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summeryContainer}>
                <Text style={styles.title}>Choosen Number : </Text>
                <NumberContainer> {selectNumber}</NumberContainer>

                <Button title='START GAME' onPress={() => props.onStartGame(selectNumber)} />
            </Card>

        )
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    Start a New Game
                </Text>
                <Card style={styles.inputContainer}>
                    <View>
                        <Text style={styles.title}>Write a Number</Text>
                    </View>

                    <View>
                        <Input
                            style={styles.textInput}
                            maxLength={2}
                            keyboardType='number-pad'
                            blurOnSubmit
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enterValue}

                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary} />
                        </View>


                    </View>
                </Card>

                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center',
        color: "#000"

    },
    screenText: {
        color: '#000000',
        fontSize: 18,
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "#000",


    },
    inputContainer: {
        width: Dimensions.get('window').width * 0.8,
        maxWidth: '80%',
        alignItems: 'center'

    },
    buttonContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    textInput:
    {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        color: Colors.primary,
        width: 50,
        textAlign: 'center'

    },
    button: {
        width: 100
    },

    summeryContainer: {
        marginTop: 20
    }



});

export default StartGameScreen;