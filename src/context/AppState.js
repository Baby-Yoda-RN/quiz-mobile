import {authInitialState} from './auth/AuthState';

export const mainInitialState = {
  isLoading: true,
  auth: authInitialState,
  quiz: null,
};

