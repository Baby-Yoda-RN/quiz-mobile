import {StyleSheet} from 'react-native'
import { size, color } from "../../theme";

export const styles = StyleSheet.create({
    listItemContainer:{
        backgroundColor:color.white,
        borderRadius:size.sm,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:size.rg,
        paddingVertical:size.sm,
        alignItems:'center',
    },
    infoContainer:{
        width:'70%',
    },
    iconContainer:{
        paddingHorizontal:size.sm,
    },
    boxShadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    text:{
        color:color.darkGreen,
    },
    title:{
        fontSize:size.rg,
    }
})