import React from 'react';
import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import {style} from './Container.styles';
import {size} from '../../theme';
import {color} from '../../theme';
import {styles} from '../listView/ListView.styles';

export const Container = ({
  children,
  background,
  isVerticallyCentered = false,
  horizontalPadding = size.lg,
  isLoading = false,
  safeAreaViewStyle,
  ...rest
}) => {
  let containerStyle;
  isVerticallyCentered
    ? (containerStyle = style.containerCentered)
    : (containerStyle = style.container);

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          containerStyle,
          style.circleActivityIndicator,
          {backgroundColor: background, paddingHorizontal: horizontalPadding},
        ]}
        {...rest}>
        <ActivityIndicator size="large" color={color.primary} />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={style.safeAreaViewStyle}>
        <View style={style.container} {...rest}>
          {children}
        </View>
      </SafeAreaView>
    );
  }
};
