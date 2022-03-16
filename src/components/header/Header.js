import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Header = ({leftIcon, rightIcon, title}) => {

    return(
        <View style={style.container} >
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

const style = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        borderBottomWidth: 2,
        borderColor: 'grey',
        display: 'flex',
        flexDirection: 'row',
        height: '10%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
    }
});