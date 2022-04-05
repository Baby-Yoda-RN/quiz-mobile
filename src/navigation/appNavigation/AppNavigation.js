import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import {DashboardScreen} from '../../screens/dashboard/DashboardScreen'
import {DetailScreen} from '../../screens/detail/DetailScreen'
import {ResultScreen} from '../../screens/result/ResultScreen'
import { ProfileScreen } from "../../screens/profile/ProfileScreen";

const AppStack = createNativeStackNavigator()

export const AppNavigation = () => {
    
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Dashboard" component={DashboardScreen}/>
            <AppStack.Screen name="Detail" component={DetailScreen}/>
            <AppStack.Screen name="Result" component={ResultScreen}/>
            <AppStack.Screen name="Profile" component={ProfileScreen}/>
        </AppStack.Navigator>
    )
}