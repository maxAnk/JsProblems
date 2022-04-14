import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = props => {
    return (

        <View style={styles.screen}>
            <Text style={styles.title}>
                The Game is Over !
            </Text>
            <Text style={styles.title}>Number of Rounds : {props.numOfRound}</Text>
            <Text style={styles.title}>User Select number was : {props.userSelectNumber}</Text>

            <Button title='New Game' onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "#000",
    },
});

export default GameOverScreen;