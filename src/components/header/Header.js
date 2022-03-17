import React from 'react';
import {View, Text} from 'react-native';
import {style} from './Header.styles';

export const Header = ({leftIcon = <></>, rightIcon = <></>, title, ...rest}) => {

    return(
        <View style={style.container} {...rest} >
            <View>
                {/*Conditional rendering leftIcon*/}
                {leftIcon && leftIcon}
            </View>
            <View>
                {/*Check if title exists. If so, check type and render conditionally.*/}
                {title && (typeof title === 'string'? <Text>{title}</Text>:title )}
            </View>
            <View>
                {rightIcon}
            </View>
        </View>
    );
};

