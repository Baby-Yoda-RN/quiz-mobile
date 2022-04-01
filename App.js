import React from 'react';
import { Router } from './src/navigation/router/Router';
import {AuthProvider} from './src/context/auth/AuthProvider';

export const App = () => {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
};
