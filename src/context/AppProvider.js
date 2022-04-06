import React, {createContext, useContext, useReducer} from 'react'

//import { AppContext } from './AppContext';

import { mainInitialState } from './AppState';
import { authReducer } from './auth/AuthReducer';

export const AppContext = createContext([{},() => {}]);


export const useStore = () => {
    const [store,dispatch] = useContext(AppContext)

    return {store, dispatch}
}

export const AppProvider = ({children}) => {

  //const [state, dispatch] = useReducer(reducer, globalInitialState);

  /*useEffect(() => {
    const isAuth = async () => {
      const token = await getData(TOKEN_KEY);
      dispatch({type: RESTORE_TOKEN, token: token});
    };
    isAuth();
  }, []);

  const signIn = async values => {
    let data = await getLoginData(values);
    if (data.error) {
      return data;
    }
    await storeData(TOKEN_KEY, data.token);
    dispatch({type: SIGN_IN, token: data.token});
    return data;
  };

  const signOut = async () => {
    await removeData(TOKEN_KEY);
    dispatch({type: SIGN_OUT});
  };

  const value = useMemo(() => {
    return {state,signIn,signOut}
  },[state])*/

  return (
    <AppContext.Provider value={useReducer(authReducer, mainInitialState)}>
      {children}
    </AppContext.Provider>
  )
};

/*
export const mainReducer = (state,action) => ({
    auth: authReducer(state.auth,action)
})*/