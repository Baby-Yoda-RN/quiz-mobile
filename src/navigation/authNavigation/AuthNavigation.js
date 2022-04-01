import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import {LoginScreen} from '../../screens/login/LoginScreen'

const AuthStack = createNativeStackNavigator()

export const AuthNavigation = () => {
    
    return(
        <AuthStack.Navigator
            screenOptions={{headerShown:false}}>
            <AuthStack.Screen name="Login" component={LoginScreen}/>
        </AuthStack.Navigator>
    )
}