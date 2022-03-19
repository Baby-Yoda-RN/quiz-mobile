import {color} from '../../theme/style';
import {size} from '../../theme/size';

export const styles = {
  container: {
    margin: 20,
    justifyContent: 'center',
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
    backgroundColor: color.midGray,
    borderRadius: size.sm,
    position: 'absolute',
  },
};
