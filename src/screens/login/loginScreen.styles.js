import {StyleSheet} from 'react-native'
import { size } from '../../theme'

export const styles = StyleSheet.create({
    textInputContainer:{
        marginBottom:size.rg,
    },
    buttonContainer:{
        justifyContent:'center',
        marginTop:4,
    },
    error:{
        fontFamily:'Poppins-Regular',
        color:'tomato',
        marginLeft:size.rg,
        marginTop:size.xs,
    },
    container:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:size.lg,
    },
    errorContainer:{
        marginVertical:size.lg,
        left:-size.rg,
        alignItems:'center',
    }
})