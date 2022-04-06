import React, {isValidElement} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {style} from './Header.style';
import {Icon} from '../icon/Icon';
import {isString, isEmpty} from 'lodash';

export const Header = ({
  leftIconSet,
  leftIconName,
  leftIconColor,
  leftIconSize,
  leftContainerStyle,
  leftOnPress,

  rightIconSet,
  rightIconName,
  rightIconColor,
  rightIconSize,
  rightContainerStyle,
  rightOnPress,

  headerTitle,
  headerElement,
  headerTitleContainerStyle,
  headerTitleTextStyle,
  safeAreaViewStyle,
  ...rest
}) => {
  let headerContent;

  if (headerElement && isValidElement(headerElement)) {
    headerContent = headerElement;
  } else if (isString(headerTitle) && !isEmpty(headerTitle)) {
    headerContent = (
      <View style={headerTitleContainerStyle}>
        <Text style={headerTitleTextStyle}>{headerTitle}</Text>
      </View>
    );
  }

  let rightJustify;
  if (!leftIconName && !headerElement && !headerTitle)
    rightJustify = {justifyContent: 'flex-end'};

  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={[style.container, rightJustify]} {...rest}>
        {leftIconName && (
          <TouchableOpacity onPress={leftOnPress}>
            <Icon
              iconSet={leftIconSet}
              iconName={leftIconName}
              iconColor={leftIconColor}
              iconSize={leftIconSize}
              customIconContainerStyle={leftContainerStyle}
            />
          </TouchableOpacity>
        )}

        {headerContent}

        {rightIconName && (
          <TouchableOpacity onPress={rightOnPress}>
            <Icon
              iconSet={rightIconSet}
              iconName={rightIconName}
              iconColor={rightIconColor}
              iconSize={rightIconSize}
              customIconContainerStyle={rightContainerStyle}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};