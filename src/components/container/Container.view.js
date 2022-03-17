import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {style} from './Container.styles';

export const ContainerView = ({pageContainer, background, isVerticallyCentered = false}) =>{
    let containerAlignment;
    if (isVerticallyCentered){
        containerAlignment = style.containerCentered;
    }
    else{
        containerAlignment = style.containerStart;
    }


    return (
        <SafeAreaView style={containerAlignment} >
            <Text>{pageContainer}</Text>
        </SafeAreaView>
    );
}
