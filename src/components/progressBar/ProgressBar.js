import React from 'react';
import {View} from 'react-native';
import {styles} from './progressBar.style';
import {INITIAL_BAR_SIZE, INITIAL_BAR_MARGIN} from '../theme.style';

export const ProgressBar = ({value = 50, max = 100}) => {
  const progressValue =
    value < INITIAL_BAR_MARGIN
      ? INITIAL_BAR_MARGIN
      : value * ((max - INITIAL_BAR_SIZE) / max);
  const tempProgressIndicatorBar = [
    styles.progressIndicatorBar,
    {width: `${progressValue}%`},
  ];
  const tempEmptyBar = [styles.emptyBar, {width: `${max}%`}];

  return (
    <View style={styles.container}>
      <View style={tempEmptyBar}>
        <View style={styles.initialBar} />
        <View style={tempProgressIndicatorBar} />
      </View>
    </View>
  );
};
