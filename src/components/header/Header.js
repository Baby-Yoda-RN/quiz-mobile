import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {style} from './Header.style';

export const Header = ({
  leftElement,
  rightElement,
  headerTitle,
  leftElementContainerStyle,
  rightElementContainerStyle,
  headerTitleContainerStyle,
  safeAreaViewStyle,
  ...rest
}) => {
  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={style.container} {...rest}>
        {<View>{!!leftElement} </View> &&
          (React.isValidElement(leftElement) ? (
            <View
              style={[
                style.leftElementContainerStyle,
                leftElementContainerStyle,
              ]}>
              {leftElement}
            </View>
          ) : (
            <Text
              style={[
                style.leftElementContainerStyle,
                leftElementContainerStyle,
              ]}>
              {leftElement}
            </Text>
          ))}
        {<View>{!!headerTitle}</View> &&
          (React.isValidElement(headerTitle) ? (
            <View
              style={[
                style.headerTitleContainerStyle,
                headerTitleContainerStyle,
              ]}>
              {headerTitle}
            </View>
          ) : (
            <Text
              style={[
                style.headerTitleContainerStyle,
                headerTitleContainerStyle,
              ]}>
              {headerTitle}
            </Text>
          ))}
        {<View>{!!rightElement}</View> &&
          (React.isValidElement(rightElement) ? (
            <View
              style={[
                style.rightElementContainerStyle,
                rightElementContainerStyle,
              ]}>
              {rightElement}
            </View>
          ) : (
            <Text
              style={[
                style.rightElementContainerStyle,
                rightElementContainerStyle,
              ]}>
              {rightElement}
            </Text>
          ))}
      </View>
    </SafeAreaView>
  );
};
