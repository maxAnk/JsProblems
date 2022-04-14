import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

const NumberContainer = (props) => {

    return (
        <View style={styles.numContainer}>
            <Text style={styles.numbers}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    numbers: {
        fontSize: 20,
        color: Colors.primary,
        textAlign: 'center'
    },
    numContainer: {
        borderColor: Colors.accent,
        borderWidth: 2,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 20
    }
});

export default NumberContainer;