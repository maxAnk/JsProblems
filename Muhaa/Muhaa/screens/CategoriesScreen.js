import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constant/color';
import CategoryGridTile from '../components/CategoryGridTitle';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeal', params: {
                            categoryId: itemData.item.id
                        }
                    });
                }} />
        )
    }

    return (

        <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
        //keyExtractor={(item, index) => item.id} //old version need this

        // <View style={styles.screen}>
        //     <Text style={styles.text}>
        //         The categories screen
        //     </Text>
        //     <Button title={"Go to meal"} onPress={() => {
        //         props.navigation.navigate({ routeName: 'CategoryMeal' });
        //         // props.navigation.replace({ routeName: 'CategoryMeal' });
        //     }} />
        // </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        // Below is the custom font
        fontFamily: 'DancingScript-Bold',
    },

})

export default CategoriesScreen;