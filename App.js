import React, {useLayoutEffect} from 'react';
import {Router} from './src/navigation/router/Router';
import {AppProvider} from './src/context/AppProvider';
import './src/configuration/Axios.configuration';
import {axiosInit} from './src/configuration/Axios.configuration';

export const App = () => {
  useLayoutEffect(() => {
    await axiosInit();
  }, []);

  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};
