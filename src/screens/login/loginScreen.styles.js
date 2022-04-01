import {StyleSheet} from 'react-native'
import { size } from '../../theme'

export const styles = StyleSheet.create({
    textInputContainer:{
        marginBottom:size.rg,
    },
    button:{
        marginVertical:size.sm,
        paddingVertical:size.rg
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
    textInput:{
        paddingVertical:size.rg,
        fontFamily:'Poppins-Regular',
        fontSize:size.rg
    },
    errorContainer:{
        marginVertical:size.lg,
        left:-size.rg,
        alignItems:'center',
    }
})