import {color} from '../../theme/style';

export const styles = {
  container: {
    margin: 20,
    justifyContent: 'center',
  },
  initialBar: {
    height: 15,
    width: '3%',
    backgroundColor: color.primary,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'absolute',
  },
  progressIndicatorBar: {
    height: 15,
    marginLeft: '2%',
    backgroundColor: color.primary,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    overflow: 'hidden',
    position: 'absolute',
  },
  emptyBar: {
    height: 15,
    width: '100%',
    backgroundColor: color.midGray,
    borderRadius: 5,
    position: 'absolute',
  },
};
