import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from '../../navigation/appNavigation/AppNavigation';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {useAppValue} from '../../context/AppProvider';
import {getData} from '../../utilities/localStorage';
import {TOKEN_KEY, RESTORE_TOKEN} from '../../constants/constants'
import { Container } from '../../components';

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
    return <Container isLoading={true} />;
  }

  return (
    <NavigationContainer>
      {state.auth.token == null ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
};
