import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components';
import {ProgressBar} from '../../components/progressBar/ProgressBar';

export const DashboardScreen = () => {
  return (
    <View>
      <ProgressBar percentage={44} />
      <Text>Initial Screen</Text>
      <Button />
    </View>
  );
};
