import React from 'react';
import {View,Text} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {styles} from './Icon.style';

export const Icon = ({iconName = "angle-right",iconSize = styles.regular,iconColor = "#000000"}) => {
  return (
  <View>
    <Icons name={iconName} type="FontAwesome5" size={styles[iconSize]} color={iconColor}/>
  </View>
  )
};