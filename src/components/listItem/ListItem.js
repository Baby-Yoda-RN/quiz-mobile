import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ListItem.styles';
import {Icon} from '../../components';
import {size, color} from '../../theme';

export const ListItem = ({
  title,
  subTitle,
  maxTitleLength,
  iconName = null,
  iconSize,
  iconColor = color.darkGreen,
  ...rest
}) => {
  if (title == '' || title == null) {
    title = 'Test 1';
  } else if (title.length > maxTitleLength) {
    title = '...';
  }

  return (
    <TouchableOpacity style={styles.Container} {...rest}>
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

        <Icon iconSet={'AntDesign'} iconName={'right'} iconSize={size.rg} />
      </View>
    </TouchableOpacity>
  );
};
