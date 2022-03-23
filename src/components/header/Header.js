import React from 'react';
import {View} from 'react-native';
import {HeaderView} from './Header.view';
import {Icon, StepsProgress} from '../../components';
import {size, color} from '../../theme';

export const Header = () => {
  return (
    <HeaderView
      leftElement={
        <Icon size={size.lg} iconName={'arrow-left'} color={color.primary} />
      }
      headerTitle={
        <View>
          <StepsProgress />
        </View>
      }
      rightElement={
        <Icon size={size.lg} iconName={'user-circle'} color={color.primary} />
      }
      headerTitleContainerStyle={{color: color.primary}}
    />
  );
};
