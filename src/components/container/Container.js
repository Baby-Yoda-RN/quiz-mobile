import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {ContainerView} from './Container.view';

export const Container = ({pageContainer, background, isVerticallyCentered = false, horizontalPadding = 28}) =>{
    return <ContainerView
            pageContainer = {pageContainer}
            background = {background}
            isVerticallyCentered ={isVerticallyCentered}
            horizontalPadding = {horizontalPadding}
            />;

}
