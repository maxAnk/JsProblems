import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
import Colors from '../constant/color'

const CategoryGridTile = props => {

    let TouchableCamp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCamp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridtem}>
            <TouchableCamp style={{ flex: 1 }} onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.smallText} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCamp>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, width: '100%',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',

    },
    gridtem: {
        flex: 1,
        margin: 15,
        height: 150,
        // borderWidth: 1,
        borderColor: Colors.primaryColor,
        // justifyContent: 'center',
        // alignItems: 'center',

        shadowColor: Colors.primaryColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 6,
        borderRadius: 10,
        overflow: 'hidden'

    },
    smallText: {
        // flex: 1,
        fontSize: 25,
        fontFamily: 'DancingScript-Bold',//Regular',
        textAlign: 'right',
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})

export default CategoryGridTile;