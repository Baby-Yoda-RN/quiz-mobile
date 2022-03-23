import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, size} from '../../theme';

export const ChevronRightIcon = () => {
  return <Icons name={'right'} size={size.rg} color={color.primary} />
};

export const LeftArrowIcon = () => {
  return <Icons name={'arrowleft'} size={size.lg} color={color.primary} />
};

export const UserProfileIcon = () => {
  return <Icons2 name={'account-circle-outline'} size={size.lg} color={color.primary} />
}