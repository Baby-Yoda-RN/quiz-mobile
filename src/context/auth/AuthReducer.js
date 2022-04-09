export const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        token: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        token: action.token,
        isSignout: false,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        token: null,
        isSignout: true,
      };
    default:
      return prevState;
  }
};
