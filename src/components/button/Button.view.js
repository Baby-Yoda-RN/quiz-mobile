import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { styles } from './Button.styles';

export const ButtonView = ({title = 'Button', isDisabled = false, ...rest}) => {
    let buttonStyle;
    isDisabled ? buttonStyle = styles.buttonDisabled : buttonStyle = styles.buttonEnabled;
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} disabled={isDisabled} {...rest}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}