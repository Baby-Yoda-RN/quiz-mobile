import React from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import {style} from './Container.styles';
import {size} from '../../theme';

export const Container = ({
  children,
  background,
  isVerticallyCentered = false,
  horizontalPadding = size.lg,
  isLoading,
  ...rest
}) => {
  let containerStyle;
  isVerticallyCentered
    ? (containerStyle = style.containerCentered)
    : (containerStyle = style.container);

  if (isLoading) {
    return (
      <View>
        {/* <Progressindicator /> */}
      </View>
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
