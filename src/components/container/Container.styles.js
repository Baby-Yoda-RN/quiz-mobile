import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const style = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: color.midGray,
  },
  container: {flex: 1, paddingHorizontal: size.rg, paddingVertical: size.rg},
  circleActivityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCentered: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
