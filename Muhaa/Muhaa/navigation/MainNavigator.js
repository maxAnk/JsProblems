import React from 'react';
import { Platform } from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMeal from '../screens/CategoriesMeal';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constant/color';
import MapScreen from '../screens/MapScreen';

const MainNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }

    },

    CategoryMeal: {
        screen: CategoriesMeal
    },
    MealDetails: MealDetailsScreen,

    MapScreen: {
        screen: MapScreen,
        navigationOptions: {
            headerTitle: 'Map'
        }
    }
}, {
    // initialRouteName: 'CategoriesMeal',//else which written firstr
    // mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? '#ffffff' : ''
    }
});

export default createAppContainer(MainNavigator);
