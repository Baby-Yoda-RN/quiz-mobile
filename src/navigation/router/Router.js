import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from '../../navigation/appNavigation/AppNavigation'
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import { SplashScreen } from '../../screens/splash/SplashScreen'

export const Router = () => {
  const {state} = useContext(AppContext);

  if(state.isLoading){
    return (
      <SplashScreen/>
    )
  }

  return (
    <NavigationContainer>
      {state.auth.token?(
        <AppNavigation/>
      ):(
        <AuthNavigation/>
      )}
    </NavigationContainer>
  );
};
