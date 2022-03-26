import {StyleSheet} from 'react-native'
import { size } from '../../theme'

export const styles = StyleSheet.create({
    textInputContainer:{
        marginBottom:size.rg,
    },
    button:{
        marginVertical:size.rg,
        paddingVertical:size.rg
    },
    buttonContainer:{
        justifyContent:'center',
        marginTop:4,
    },
    error:{
        color:'tomato',
        marginLeft:size.rg,
        fontSize:size.rg
    }
})