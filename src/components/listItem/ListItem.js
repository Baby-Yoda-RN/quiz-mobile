import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ListItem.styles';
import {Icon} from '../../components';
import {size, color} from '../../theme';

export const ListItem = ({
  title,
  subTitle,
  MaxTitleLength,
  iconName = null,
  iconSize,
  iconColor = color.darkGreen,
}) => {
  if (title == '' || title == null) {
    title = 'Test 1';
  } else if (title.length > MaxTitleLength) {
    title = '...';
  }

  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.TextContainer}>
        <View>
          <Text style={styles.Title}>{title}</Text>
        </View>

        <View>
          <Text style={styles.SubTitle}>{subTitle}</Text>
        </View>
      </View>

      <View style={[styles.IconContainer]}>
        {!!iconName && (
          <Icon
            name={iconName}
            type="FontAwesome5"
            size={iconSize}
            color={iconColor}
          />
        )}
        {iconName === null && <Text>></Text>}
      </View>
    </TouchableOpacity>
  );
};
