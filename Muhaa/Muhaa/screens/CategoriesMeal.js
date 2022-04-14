import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import CustomHeaderButton from '../components/HeaderButton';

import Icon from 'react-native-vector-icons/Ionicons';



const CategoriesMeal = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageurl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetails', params: {
                            categoryId: itemData.item.id
                        }
                    });
                }} />
        )
    }



    const catId = props.navigation.getParam('categoryId');

    // const selectedCategory = CATEGORIES.find(value => value.id === catId);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{ width: '100%' }} />
        </View>
    )


    // return (
    //     <View style={styles.screen}>
    //         <Text style={styles.text}>
    //             {selectedCategory.title}
    //         </Text>
    //         <Button title='Go MealDetails' onPress={() => {
    //             // props.navigation.navigate({routeName:'MealDetails'});
    //             props.navigation.navigate('MealDetails');
    //             // props.navigation.push('CategoryMeal'); //one page load again load

    //         }} />

    //         {/* <Button title='Go Back' onPress={() => {
    //             props.navigation.goBack();//pop()
    //         }} /> */}
    //     </View>
    // )
}

CategoriesMeal.navigationOptions = (navigationData) => {

    const cId = navigationData.navigation.getParam('categoryId');
    const selCat = CATEGORIES.find(value => value.id === cId);

    return {
        headerTitle: selCat.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? selCat.color : ''
        },
        headerTintColor: Platform.OS === 'android' ? '#ffffff' : '',
        // headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        //     <Item
        //         title='Favorite'
        //         iconName='ios-star'
        //         onPress={() => {
        //             console.log('Mark as Favorite');
        //         }} />
        // </HeaderButtons>
        headerRight: <Icon name="ios-star" onPress={() => {
            console.log('Mark as Favorite');
        }} size={30} /> //if you use this star was come

    }

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: "#f728b7",
        // Below is the custom font
        fontFamily: 'DancingScript-Bold',
    },
    smallText: {
        // flex: 1,
        fontSize: 25,
        fontFamily: 'DancingScript-Bold',//Regular',
        textAlign: 'center',
        color: "#000000"
        // justifyContent: 'center',
        // alignItems: 'center',
    }
});

export default CategoriesMeal;