import React from 'react';
import {Icon} from '../../components/icon/Icon'
import {Text, View} from 'react-native';
import {Button} from '../../components';
import {ProgressBar} from '../../components/progressBar/ProgressBar';
import {StepsProggress} from '../../components/stepsProgress/StepsProgress';

export const DashboardScreen = () => {
  return (
    <View>
    <Icon iconSize={"regular"} iconName={"boxes"} iconColor={"#000000"}/>
    <StepsProggress currentStep={2} totalSteps={30}/>
    <ProgressBar percentage={44} />
    <Text>Initial Screen</Text>
    <Button />
    </View>
  );
};
