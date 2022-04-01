import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    justifyContent: 'space-evenly',
    flexFlow: 'column',
    paddingVertical: size.xl,
    borderRadius: size.sm,
  },
  textMessage: {
    color: color.darkGreen,
    marginVertical: size.xl,
    fontSize: size.lg,
    textAlign: 'center',
  },
  score: {
    marginVertical: size.xl,
    textAlign: 'center',
    fontSize: size.xl,
  },
});
