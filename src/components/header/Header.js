import React from 'react';
import {View} from 'react-native';
import {HeaderView} from './Header.view';
import {StepsProgress} from '../../components';
import {size, color} from '../../theme';

export const Header = () => {
  return (
    <HeaderView
      headerTitle={
        <View>
          <StepsProgress />
        </View>
      }
      headerTitleContainerStyle={{color: color.primary}}
    />
  );
};
