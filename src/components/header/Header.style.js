import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: size.xs,
    borderColor: color.lightGray,
    flexDirection: 'row',
    height: size.xl,
    justifyContent: 'space-between',
    paddingHorizontal: size.rg,
  },
  headerTitleContainer: {
    marginHorizontal: size.sm,
    marginVertical: size.sm,
  },
  leftElementContainer: {
    marginHorizontal: size.sm,
    marginVertical: size.sm,
  },
  rightElementContainer: {
    marginHorizontal: size.sm,
    marginVertical: size.sm,
  },
});
