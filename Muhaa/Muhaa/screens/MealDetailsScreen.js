import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {

    const catId = props.navigation.getParam("categoryId");

    const selectedMeal = MEALS.find(meal => meal.id === catId);




    return (
        <View style={styles.screen}>
            <Text style={styles.text}>
                The MealDetails screen
            </Text>
            <Text>
                {selectedMeal.title}
            </Text>
            <View style={styles.btContainer}>
                <Button title='Go Back Top' style={styles.btn} onPress={() => {
                    props.navigation.popToTop();
                }} />
                <Button title='Go Map' style={styles.btn} onPress={() => {
                    props.navigation.navigate({
                        routeName: 'MapScreen'
                    })
                }} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    btContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 20

    },

    btn: {
        // marginHorizontal: 10
    },
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: "green",
        // Below is the custom font
        fontFamily: 'DancingScript-Bold',
    }
})

export default MealDetailsScreen;