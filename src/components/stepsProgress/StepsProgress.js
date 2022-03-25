import React from 'react';
import {View, Text} from 'react-native';

<<<<<<< HEAD
export const StepsProgress = ({
    currentStep = 1, 
    totalSteps = 20
}) => {
    if (!totalSteps || !Number.isInteger(totalSteps)){
        throw console.error('Value for totalSteps required');
    }
    return (
        <View>
            <Text>{currentStep}/{totalSteps}</Text>
        </View>
    );
}
=======
export const StepsProgress = ({currentStep = 1, totalSteps = 20}) => {
  if (!totalSteps || !Number.isInteger(totalSteps)) {
    throw console.error('Value for totalSteps required');
  }

  return (
    <View>
      <Text>
        {currentStep}/{totalSteps}
      </Text>
    </View>
  );
};
>>>>>>> d9e6de69e0d8e16b6e79127d258d1bd74cb36ede
