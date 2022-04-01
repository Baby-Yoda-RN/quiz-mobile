import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth/AuthContext';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from '../../navigation/appNavigation/AppNavigation'
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import { SplashScreen } from '../../screens/splash/SplashScreen'

export const Router = () => {
  const {state} = useContext(AuthContext);

  if(state.isLoading){
    return (
      <SplashScreen/>
    )
  }

  return (
    <NavigationContainer>
      {state.token?(
        <AppNavigation/>
      ):(
        <AuthNavigation/>
      )}
    </NavigationContainer>
  );
};
