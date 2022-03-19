import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {style} from './Container.styles';
import {size} from '../../theme';

export const Container = ({children, background , isVerticallyCentered = false, horizontalPadding = size.lg, ...rest}) =>{
    let containerStyle;
    isVerticallyCentered ? containerStyle = style.containerCentered : containerStyle = style.container;

    return (
            <SafeAreaView style={[containerStyle,{backgroundColor: background, paddingHorizontal: 32, ...rest}]} >
               {children}
            </SafeAreaView>
        );

}
