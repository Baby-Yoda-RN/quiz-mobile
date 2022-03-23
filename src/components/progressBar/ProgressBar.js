import React from 'react';
import {View} from 'react-native';
import {styles} from './progressBar.style';

export const ProgressBar = ({percentage = 0}) => {
  const max = 100;
  const progressValue =
    percentage < 0
      ? 0
      : percentage > 100
      ? 100
      : percentage * ((max - 2) / max);
  const progressIndicatorBar = [
    styles.progressIndicatorBar,
    {width: `${progressValue}%`},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.emptyBar}>
        <View style={styles.initialBar} />
        <View style={progressIndicatorBar} />
      </View>
    </View>
  );
};
