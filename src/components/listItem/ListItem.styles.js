import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: color.white,
    borderRadius: 8, //size.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: size.rg,
    paddingVertical: size.sm,
    alignItems: 'center',

    //Box Shadow
    shadowColor: color.lightGray2, //color
    shadowOffset: {
      width: 0, //offset x
      height: 4, //offset y
    },
    shadowRadius: 4, //Blur radius

    shadowOpacity: 0.16, //Opacity
    elevation: 1, //on lower Android APIs, use the elevation property
  },
  TextContainer: {
    flex: 1,
  },
  IconContainer: {
    paddingHorizontal: size.sm,
  },

  Title: {
    fontFamily: 'Poppins-Regular',
    fontSize: size.rg,
    color: color.darkGreen,
  },

  SubTitle: {
    fontFamily: 'Poppins-Regular',
    color: color.darkGreen,
  },
});
