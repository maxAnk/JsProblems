import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View  >
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={{ width: '100%', height: '100%' }}>
                            <Text style={styles.smallText}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <Text>
                            {props.duration} m
                        </Text>
                        <Text>
                            {props.complexity}
                        </Text>
                        <Text>
                            {props.affordability}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    smallText: {
        fontSize: 25,
        fontFamily: 'DancingScript-Bold',//Regular',
        textAlign: 'center',
        color: "white",
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12


    },
    mealRow: {

        flexDirection: 'row'
    },
    mealHeader: {
        height: '80%'

    },
    mealDetails: {

    }
});

export default MealItem;