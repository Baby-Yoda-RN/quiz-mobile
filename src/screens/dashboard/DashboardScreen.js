import React from 'react';
import {Text} from 'react-native';
import {ProgressBar} from '../../components/progressBar/ProgressBar';

export const DashboardScreen = () => {
  return <ProgressBar value={2} max={100} />;
};
