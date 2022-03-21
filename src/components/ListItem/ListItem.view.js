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
    <View style={style.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={style.AlignmentContainer}>
          <View style={style.AlignmentContainerText}>
            <Text style={style.FontStyleSizeTitle}>{Title}</Text>
            <Text style={style.FontStyleSubTitle}>{subtitle}</Text>
          </View>

          <View style={style.IconStyle}>
            <Text>></Text>
            <Icons
            //name={iconName}
            //type="FontAwesome5"
            //size={iconSize}
            //color={iconColor}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
