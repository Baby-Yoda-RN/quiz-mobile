import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {ContainerView} from './Container.view';

export const Container = ({PageContainer}) =>{
    return <ContainerView
            pageContainer = 'test'
            background = 'blue'
            isVerticallyCentered
            />;

}
