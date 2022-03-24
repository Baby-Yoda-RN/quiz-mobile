import React from 'react';
import {View} from 'react-native';
import {style} from './Icon.style';

export const IconView = ({icon, customIconContainerStyle}) => {

  return (
    <View style={[style.iconContainerStyle, customIconContainerStyle]}>
      {icon}
    </View>
  );
};
