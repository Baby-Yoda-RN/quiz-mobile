import React from 'react';
import {style} from './ListItem.Style';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';

const _iconSize = 15;
const _iconName = 'angle-right';
const _iconColor = '#7199FF';

export const Item = ({
  Title = '',
  subtitle = 'Test one is about this',
  MaxTitleLength,
  onPress,
  iconName = _iconName,
  iconSize = _iconSize,
  iconColor = _iconColor,
}) => {
  if (Title == '') {
    Title = 'Test 1';
  } else if (Title.length > MaxTitleLength) {
    Title = '...';
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.TestContainer}>
        <Text style={styles.FontStyleSizeTitle}>{Title}</Text>
        <Text style={styles.FontStyleSubTitle}>{subtitle}</Text>
      </View>

      <View style={styles.IconStyle}>
        <Text>></Text>
      </View>
    </TouchableOpacity>
  );
};
