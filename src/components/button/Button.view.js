import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { styles } from './Button.styles';

export const ButtonView = ({title = 'Button', isDisabled = false, press, buttonStyle, titleStyle}) => {

    let buttonClickableStyle;
    isDisabled ? buttonClickableStyle = styles.buttonDisabled : buttonClickableStyle = styles.buttonEnabled;
    
    return (
        <TouchableOpacity style={[styles.container, buttonStyle, buttonClickableStyle]} disabled={isDisabled} onPress={() => press()}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}