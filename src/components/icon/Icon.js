import React from 'react';
import {View} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Icon = ({
  iconName,
  iconSize,
  iconColor = '#000000',
  containerStyle,
  ...rest
}) => {
  return (
    <View style={containerStyle}>
      <Icons name={iconName} type="FontAwesome5" {...rest} />
    </View>
  );
};
