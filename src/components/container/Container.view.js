import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {style} from './Container.styles';

export const ContainerView = ({pageContainer, background, isVerticallyCentered, horizontalPadding}) =>{
    let containerStyle;

    isVerticallyCentered ? containerStyle = style.containerCentered : containerStyle = style.containerStart;

    return (
        <SafeAreaView style={[containerStyle,{backgroundColor: background}, {paddingHorizontal: horizontalPadding}]} >
           {pageContainer}
        </SafeAreaView>
    );


}
