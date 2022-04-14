import React from 'react';
import { Platform, View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import color from '../constant/color';
import { Ionicons } from 'react-native-vector-icons'

const CustomHeaderButton = props => {
    return
    {

        <HeaderButton {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : color.primaryColor}
        />

    };
}
export default CustomHeaderButton;