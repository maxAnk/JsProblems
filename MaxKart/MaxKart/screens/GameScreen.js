import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert, Dimensions } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));
    const [round, setRound] = useState(0);

    const currenLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => { //after every render this hooks run

        if (currentGuess === userChoice) {
            onGameOver(round);
        }

    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Dont lie !", " you know thats wrong", [{ text: "sorry", style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currenLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currenLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRound(curRound => curRound + 1);
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                Opponents Guess
            </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btContain}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "#000",


    },
    screen: {
        // flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    }
})

export default GameScreen;