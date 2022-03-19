import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {style} from './Container.styles';

export const Container = ({children = <Text>hello</Text> , background , isVerticallyCentered = false, horizontalPadding = 32, ...rest}) =>{
    let containerStyle;
    isVerticallyCentered ? containerStyle = style.containerCentered : containerStyle = style.container;

    return (
            <SafeAreaView style={[containerStyle,{backgroundColor: background, paddingHorizontal: horizontalPadding, ...rest}]} >
               {children}
            </SafeAreaView>
        );

}
