import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {style} from './Container.styles';

export const ContainerView = ({pageContainer, background, isVerticallyCentered, horizontalPadding}) =>{

    if(isVerticallyCentered){
        return (
            <SafeAreaView style={[style.containerCentered,{backgroundColor: background}, {paddingHorizontal: horizontalPadding}]} >
                <Text>{pageContainer}</Text>
            </SafeAreaView>
        );
    }
    else{
        return (
            <SafeAreaView style={[style.containerStart,{backgroundColor: background}, {paddingHorizontal: horizontalPadding}]} >
                <Text>{pageContainer}</Text>
            </SafeAreaView>
        );

    }
}
