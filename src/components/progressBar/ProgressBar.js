import React from 'react';
import {View} from 'react-native';
import {styles} from './progressBar.style';

export const ProgressBar = ({percentage = 0, newMax}) => {
  const max = 100;
  const progressValue = percentage < 0 ? 0 : percentage * ((max - 2) / max);
  const tempProgressIndicatorBar = [
    styles.progressIndicatorBar,
    {width: `${progressValue}%`},
  ];
  const tempEmptyBar = [styles.emptyBar];

  return (
    <View style={styles.container}>
      <View style={tempEmptyBar}>
        <View style={styles.initialBar} />
        <View style={tempProgressIndicatorBar} />
      </View>
    </View>
  );
};
