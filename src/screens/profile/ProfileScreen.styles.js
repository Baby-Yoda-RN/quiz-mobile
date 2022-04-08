import {StyleSheet} from 'react-native';
import { color, size } from '../../theme';

export const styles = StyleSheet.create({
    container:{
       backgroundColor:color.white,
       justifyContent:'space-evenly',
       flexFlow: 'column',
       paddingVertical: size.xl,
       borderRadius: size.sm,   
   },
   text:{
       
       color: color.darkGreen,
       marginVertical: size.sm,
      fontSize: size.rg,
   },
   scores:{
       color: color.darkGreen,
       fontSize: size.rg
   },
   button: {
       marginVertical:size.rg,
       paddingVertical:size.rg,
   },
  

})