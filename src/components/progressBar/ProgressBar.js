import React from 'react';
import {View} from 'react-native';
import {styles} from './progressBar.style';

export const ProgressBar = ({percentage = 0, containerStyle, ...rest}) => {
  let _progressWidth;

  if (percentage <= 0) {
    _progressWidth = 0;
  } else if (percentage > 100) {
    _progressWidth = 100;
  } else {
    _progressWidth = percentage;
  }

  const progressBarStyle = {
    width: `${_progressWidth}%`,
  };

  return (
    <View style={[styles.container, containerStyle]} {...rest}>
      <View style={styles.initialProgressBar} />
      <View style={[styles.progressBarContainer]}>
        <View style={[styles.progressBar, progressBarStyle]} />
      </View>
    </View>
  );
};
