import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {style} from './Icon.style';
import {color, size} from '../../theme';

export const Icon = ({
  iconName,
  iconSet,
  iconSize = size.lg,
  iconColor = color.primary,
  customIconContainerStyle,
  ...rest
}) => {
  let icon;

  switch (iconSet) {
    case 'AntDesign':
      icon = <AntDesign name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'Entypo':
      icon = <Entypo name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'EvilIcons':
      icon = <EvilIcons name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'Feather':
      icon = <Feather name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'FontAwesome':
      icon = <FontAwesome name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'FontAwesome5':
      icon = <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'Fontisto':
      icon = <Fontisto name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'Foundation':
      icon = <Foundation name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'Ionicons':
      icon = <Ionicons name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'MaterialCommunityIcons':
      icon = (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      );
      break;
    case 'MaterialIcons':
      icon = (
        <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
      );
      break;
    case 'Octicons':
      icon = <Octicons name={iconName} size={iconSize} color={iconColor} />;
      break;
    case 'SimpleLineIcons':
      icon = (
        <SimpleLineIcons name={iconName} size={iconSize} color={iconColor} />
      );
      break;
    case 'Zocial':
      icon = <Zocial name={iconName} size={iconSize} color={iconColor} />;
      break;
    default:
      icon = (
        <AntDesign
          name={'exclamationcircleo'}
          color={color.primary}
          size={size.lg}
        />
      );
  }

  return (
    <View
      style={[style.iconContainerStyle, customIconContainerStyle]}
      {...rest}>
      {icon}
    </View>
  );
};
