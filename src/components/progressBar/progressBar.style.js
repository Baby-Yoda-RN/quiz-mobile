import {color, size} from '../../theme/';

export const styles = {
  container: {
    flexDirection: 'row',
  },
  initialProgressBar: {
    width: '3%',
    minHeight: size.sm,
    backgroundColor: color.primary,
    borderTopLeftRadius: size.sm,
    borderBottomLeftRadius: size.sm,
  },
  progressBarContainer: {
    flex: 1,
  },
  progressBar: {
    minHeight: 8,
    backgroundColor: color.primary,
    borderTopRightRadius: size.sm,
    borderBottomRightRadius: size.sm,
  },

  // initialBar: {
  //   height: 15,
  //   width: '3%',
  //   backgroundColor: PRIMARY,
  //   borderTopLeftRadius: 10,
  //   borderBottomLeftRadius: 10,
  //   overflow: 'hidden',
  //   position: 'absolute',
  // },
  // progressIndicatorBar: {
  //   height: 15,
  //   marginLeft: `${INITIAL_BAR_MARGIN}%`,
  //   backgroundColor: PRIMARY,
  //   borderTopRightRadius: 10,
  //   borderBottomRightRadius: 10,
  //   overflow: 'hidden',
  //   position: 'absolute',
  // },
  // emptyBar: {
  //   height: 15,
  //   width: '100%',
  //   backgroundColor: MIDGREY,
  //   borderRadius: 5,
  //   position: 'absolute',
  // },
};
