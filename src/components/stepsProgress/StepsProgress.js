import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './StepsProgress.style';

export const StepsProgress = ({currentStep = 1, totalSteps = 20}) => {
    if(!totalSteps || !Number.isInteger(totalSteps)){
        throw console.error('Value for totalSteps required');
    }

    if(!currentStep || !Number.isInteger(currentStep)){
      throw console.error('Value for currentStep required');
    }

    return (
        <View styles={styles.container}>
          <Text style={styles.textStyle}>{currentStep}/{totalSteps}</Text>
        </View>
    );
}