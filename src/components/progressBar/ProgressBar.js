import React from 'react';
import {View} from 'react-native';
import {styles} from './ProgressBar.style';

export const ProgressBar = ({style, percentage = 0, ...rest}) => {
  const min = 0;
  const max = 100;
  const progressValue =
    percentage < min
      ? min
      : percentage > max
      ? max
      : percentage * ((max - 2) / max);
  const progressIndicatorBar = [
    styles.progressIndicatorBar,
    {width: `${progressValue}%`},
  ];

  return (
    <View style={[styles.container, style]}>
      <View style={styles.emptyBar}>
        <View style={styles.initialBar} />
        <View style={progressIndicatorBar} />
      </View>
    </View>
  );
};
