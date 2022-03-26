import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {style} from './Container.styles';
import {size} from '../../theme';
import { color } from '../../theme';

export const Container = ({
  children,
  background,
  isVerticallyCentered = false,
  horizontalPadding = size.lg,
  isLoading = false,
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
        containerStyle, style.circleActivityIndicator,
        {backgroundColor: background, paddingHorizontal: horizontalPadding},
      ]}
      {...rest}>
        <ActivityIndicator size='large' color={color.primary} />
      </SafeAreaView>
    );
  } else {
  return (
    <SafeAreaView
      style={[
        containerStyle,
        {backgroundColor: background, paddingHorizontal: horizontalPadding},
      ]}
      {...rest}>
      {children}
    </SafeAreaView>
  );
}
};
