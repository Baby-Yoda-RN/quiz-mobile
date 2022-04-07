import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:size.sm,
    paddingVertical:size.rg
  },
  buttonDisabled: {
    backgroundColor: color.darkGray,
  },
  buttonEnabled: {
    backgroundColor: color.primary,
  },
  title: {
    color: color.white,
    fontSize: size.rg,
    lineHeight: size.lg,
    textAlign: 'center',
  },
});
