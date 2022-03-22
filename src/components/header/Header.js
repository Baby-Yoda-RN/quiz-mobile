import React from 'react';
import {Text} from 'react-native';
import {HeaderView} from './Header.view';
import {Icon} from '../../components';
import {size, color} from '../../theme';

export const Header = () => {
  return (
    <HeaderView
      leftElement={
        <Icon size={size.lg} iconName={'arrow-left'} color={color.primary} />
      }
      //   headerTitle={<Text>3/20</Text>}
      rightElement={
        <Icon size={size.lg} iconName={'user-circle'} color={color.primary} />
      }
      headerTitleContainerStyle={{color: color.primary}}
    />
  );
};
