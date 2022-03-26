import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconView} from './Icon.view';
import {color, size} from '../../theme';

export const ChevronRightIcon = () => {
  return (
    <IconView
      icon={<AntDesign name={'right'} size={size.rg} color={color.primary} />}
    />
  );
};

export const LeftArrowIcon = () => {
  return (
    <IconView
      icon={
        <AntDesign name={'arrowleft'} size={size.lg} color={color.primary} />
      }
    />
  );
};

export const UserProfileIcon = () => {
  return (
    <IconView
      icon={
        <MaterialCommunityIcons
          name={'account-circle-outline'}
          size={size.lg}
          color={color.primary}
        />
      }
    />
  );
};
