import React from 'react';
import {View, Text} from 'react-native';

export const StepsProggress = ({currentStep = 1, totalSteps}) => {
    if (totalSteps === null || totalSteps === undefined){
        throw console.error('Value for totalSteps required');
    }

    return (
        <View>
            <Text>{currentStep}/{totalSteps}</Text>
        </View>
    );
}