import {StyleSheet} from 'react-native';
import {color, size} from '../../theme'
/*
 * Styles used for TextInput component
 */

export const styles = StyleSheet.create({
  textInputStyles: {
    backgroundColor: color.white,//White
    borderColor: color.lightGray, //Gray
    borderWidth: 1,
    borderRadius: size.sm,
    paddingHorizontal: 10, //padding inside the TextView
  },
});