import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export const Button = ({title = 'Button', isDisabled = false}) => {

    return (
        <TouchableOpacity title={title} disabled={isDisabled} />
    );
}