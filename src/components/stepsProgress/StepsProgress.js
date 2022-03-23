import React from 'react';
import {View, Text} from 'react-native';

export const StepsProgress = ({currentStep = 1, totalSteps = 20}) => {
    if(!totalSteps || !Number.isInteger(totalSteps)){
        throw console.error('Value for totalSteps required');
    }

    return (
        <View>
            <Text>{currentStep}/{totalSteps}</Text>
        </View>
    );
}