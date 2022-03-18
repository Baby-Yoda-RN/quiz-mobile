import React from 'react';
import {style} from './ListItem.style';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import {Icon} from 'react-native-elements';

const iconSize = 50;

export const Item = ({
  Title = '',
  subtitle = 'Test one is about this',
  icon,
  MaxTitleLength,
}) => {
  if (Title == '') {
    Title = 'Test';
  } else if (Title.length > MaxTitleLength) {
    Title = '...';
  }

  return (
    <View style={style.container}>
      <TouchableOpacity>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
          }}>
          <View style={{flex: 2}}>
            <Text style={style.FontSizeTitle}>{Title}</Text>
            <Text style={style.FontStyleSubTitle}>{subtitle}</Text>
          </View>

          <View style={style.rightend}>
            <Icon name="arrow-right" size={30} color="black" type="entypo" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
