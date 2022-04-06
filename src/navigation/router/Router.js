import React, {useEffect} from 'react';
//import {AppContext} from '../../context/AppContext';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from '../../navigation/appNavigation/AppNavigation'
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import { SplashScreen } from '../../screens/splash/SplashScreen'
import { useStore } from '../../context/AppProvider';
import { authInitialState } from '../../context/auth/AuthState';

export const Router = () => {
  const store = useStore()

  useEffect(() => {
    console.log(store.dispatch({type:'TEST'}))
  },[])
  /*if(state.isLoading){
    return (
      <SplashScreen/>
    )
  }*/

  return (
    <NavigationContainer>
      {/*state.auth.token?(
        <AppNavigation/>
      ):(
        <AuthNavigation/>
      )*/}
      <AuthNavigation/>
    </NavigationContainer>
  );
};
