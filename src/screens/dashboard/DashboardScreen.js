import React from 'react';
import {Text} from 'react-native';
import {ProgressBar} from '../../components/progressBar/ProgressBar';

export const DashboardScreen = () => {
  return <ProgressBar percentage={44} newMax={100} />;
};
