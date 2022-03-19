import React from 'react';
import {Icon} from '../../components/icon/Icon'
import {Text, View} from 'react-native';
import {Button} from '../../components';
import {ProgressBar} from '../../components/progressBar/ProgressBar';

export const DashboardScreen = () => {
  return (
    <View>
    <Icon iconSize={"regular"} iconName={"boxes"} iconColor={"#000000"}/>
    <ProgressBar percentage={44} />
    <Text>Initial Screen</Text>
    <Button />
    </View>
  );
};
