import {color, size} from '../../theme';

export const styles = {
  container: {
    margin: size.lg,
    paddingHorizontal: size.rg,
  },
  initialBar: {
    height: size.sm,
    width: '3%',
    backgroundColor: color.primary,
    borderRadius: size.sm,
    overflow: 'hidden',
    position: 'absolute',
  },
  progressIndicatorBar: {
    height: size.sm,
    marginLeft: '2%',
    backgroundColor: color.primary,
    borderTopRightRadius: size.sm,
    borderBottomRightRadius: size.sm,
    overflow: 'hidden',
    position: 'absolute',
  },
  emptyBar: {
    height: size.sm,
    width: '100%',
    backgroundColor: color.darkGray,
    borderRadius: size.sm,
    position: 'absolute',
  },
};
