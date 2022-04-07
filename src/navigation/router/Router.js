import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from '../../navigation/appNavigation/AppNavigation';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {SplashScreen} from '../../screens/splash/SplashScreen';
import {useAppValue} from '../../context/AppProvider';
import {getData} from '../../utilities/localStorage';
import {TOKEN_KEY, RESTORE_TOKEN} from '../../constants.js'

export const Router = () => {
  const {state, dispatch} = useAppValue();

  useEffect(() => {
    const isAuth = async () => {
      const token = await getData(TOKEN_KEY);
      dispatch({type: RESTORE_TOKEN, token: token});
    };
    isAuth();
  }, []);

  if (state.auth.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {state.auth.token ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
