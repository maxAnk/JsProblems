import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Card = (props) => {

    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {

        color: '#000',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 }, // shadow only work in ios
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        backgroundColor: "#ffffff",
        elevation: 5, //shadow effect
        padding: 10
    }
})

export default Card;