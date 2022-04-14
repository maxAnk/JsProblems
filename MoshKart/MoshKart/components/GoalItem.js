import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItems}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    listItems: {
        padding: 10,
        marginVertical: 4,
        backgroundColor: "#ccc",
        borderColor: '#000',
        borderWidth: 1
    },
    text: {
        fontFamily: 'DancingScript-Regular'
    }
})
export default GoalItem