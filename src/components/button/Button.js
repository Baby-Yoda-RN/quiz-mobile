import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Button.styles';

export const Button = ({title = 'Button', isDisabled = false, ...rest}) => {
    let buttonStyle;

    if (isDisabled) {
        buttonStyle = [styles.buttonEnabled, styles.buttonDisabled];
    } else {
        buttonStyle = styles.buttonEnabled;
    }
    
    return (
        <TouchableOpacity style={buttonStyle} disabled={isDisabled} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}