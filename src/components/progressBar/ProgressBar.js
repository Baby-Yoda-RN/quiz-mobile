import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {styles} from './progressBar.style';

export const ProgressBar = ({value = '5%', max = '100'}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.frontBar, {width: `${max}%`}]} />
      <View style={[styles.backBar, {width: `${value}%`}]} />
    </View>
  );
};
