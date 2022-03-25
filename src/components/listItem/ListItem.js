import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ListItem.styles';

export const ListItem = ({
  title,
  subTitle,
  titleContainerStyle,
  subTitleContainerStyle,
  listItemContainerStyle,
  titleStyle,
  subTitleStyle,
  iconContainerStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.listItemContainer,
        styles.boxShadow,
        listItemContainerStyle,
      ]}
      {...rest}>
      <View style={styles.infoContainer}>
        {!!title && (
          <View style={titleContainerStyle}>
            <Text
              numberOfLines={1}
              style={[styles.text, styles.title, titleStyle]}>
              {title}
            </Text>
          </View>
        )}
        {!!subTitle && (
          <View style={subTitleContainerStyle}>
            <Text numberOfLines={1} style={[styles.text, subTitleStyle]}>
              {subTitle}
            </Text>
          </View>
        )}
      </View>
      <View style={[styles.iconContainer, iconContainerStyle]}>
        {/* <Icon size={size.rg} name={'chevron-right'} color={color.primary} /> */}
      </View>
    </TouchableOpacity>
  );
};
