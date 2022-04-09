import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  textInputStyles: {
    backgroundColor: color.white,
    borderColor: color.darkGray,
    borderWidth: 1,
    borderRadius: size.sm,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: size.rg,
    paddingVertical: size.rg,
    fontSize: size.rg,
  },
});
