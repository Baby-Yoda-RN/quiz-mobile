import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import {DashboardScreen} from '../../screens';
import {DetailScreen} from '../../screens';
import {ResultScreen} from '../../screens';
import {ProfileScreen} from '../../screens';

const AppStack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Dashboard" component={DashboardScreen} />
      <AppStack.Screen name="Detail" component={DetailScreen} />
      <AppStack.Screen name="Result" component={ResultScreen} />
      <AppStack.Screen name="Profile" component={ProfileScreen} />
    </AppStack.Navigator>
  );
};