import {color} from '../../theme/style';

export const styles = {
  container: {
    margin: 20,
    justifyContent: 'center',
  },
  initialBar: {
    height: 8,
    width: '3%',
    backgroundColor: color.primary,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'absolute',
  },
  progressIndicatorBar: {
    height: 8,
    marginLeft: '2%',
    backgroundColor: color.primary,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
    position: 'absolute',
  },
  emptyBar: {
    height: 8,
    width: '100%',
    backgroundColor: color.midGray,
    borderRadius: 5,
    position: 'absolute',
  },
};
