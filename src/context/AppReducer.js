import {authInitialState} from './auth/AuthState';

export const globalInitialState = {
  isLoading: true,
  auth: authInitialState,
  quiz: null,
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        auth: {token: action.token},
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        auth: {
          token: action.token,
          isSignout: false,
        },
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        auth: {
          token: null,
          isSignout: true,
        },
      };
  }
};
