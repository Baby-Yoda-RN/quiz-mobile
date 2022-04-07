import React from 'react';
import { Router } from './src/navigation/router/Router';
import {AppProvider} from './src/context/AppProvider';

export const App = () => {

  return (
    <AppProvider>
      <Router/>
    </AppProvider>
  );
};
