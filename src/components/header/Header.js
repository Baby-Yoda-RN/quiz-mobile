import React, {isValidElement} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {style} from './Header.style';
import {Icon} from '../icon/Icon';
import {isString, isEmpty} from 'lodash';

export const Header = ({
  leftIconName,
  leftOnPress,
  leftContainerStyle,

  rightIconName,
  rightContainerStyle,
  rightOnPress,

  headerTitle,
  headerElement,
  headerTitleContainerStyle,
  safeAreaViewStyle,
  ...rest
}) => {
  let headerContent;

  if (headerElement && isValidElement(headerElement)) {
    headerContent = headerElement;
  } else if (isString(headerTitle) && !isEmpty(headerTitle)) {
    headerContent = (
      <View style={headerTitleContainerStyle}>
        <Text>{headerTitle}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={style.container} {...rest}>
        {leftIconName && isValidElement(leftIconName) && (
          <TouchableOpacity onPress={leftOnPress}>
            <Icon
              iconName={leftIconName}
              customIconContainerStyle={leftContainerStyle}
            />
          </TouchableOpacity>
        )}

        {headerContent}

        {rightIconName && isValidElement(rightIconName) && (
          <TouchableOpacity onPress={rightOnPress}>
            <Icon
              iconName={rightIconName}
              customIconContainerStyle={rightContainerStyle}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
