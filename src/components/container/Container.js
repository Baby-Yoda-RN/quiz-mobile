import React from 'react';
import {SafeAreaView} from 'react-native';
import {style} from './Container.styles';
import {size} from '../../theme';
import * as ProgressIndicator from 'react-native-progress';

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
        containerStyle, style.circleProgressIndicator,
        {backgroundColor: background, paddingHorizontal: horizontalPadding},
      ]}
      {...rest}>
        <ProgressIndicator.Circle size={size.xl} indeterminate={true} />
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
