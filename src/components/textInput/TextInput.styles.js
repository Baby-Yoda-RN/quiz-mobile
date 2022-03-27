import {StyleSheet} from 'react-native';
import {color, size} from '../../theme'
/*
 * Styles used for TextInput component
 */

export const styles = StyleSheet.create({
  textInputStyles: {
    backgroundColor: color.white,
    borderColor: color.darkGray,
    borderWidth: 1,
    borderRadius: size.sm,
    paddingHorizontal: 17, 
  },
});