import {PRIMARY, MIDGREY, INITIAL_BAR_MARGIN} from '../theme.style';

export const styles = {
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  initialBar: {
    height: 15,
    width: '3%',
    backgroundColor: PRIMARY,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
  },
  progressIndicatorBar: {
    height: 15,
    marginLeft: `${INITIAL_BAR_MARGIN}%`,
    backgroundColor: PRIMARY,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
  },
  emptyBar: {
    height: 15,
    width: '100%',
    backgroundColor: MIDGREY,
    borderRadius: 5,
    position: 'absolute',
  },
};
