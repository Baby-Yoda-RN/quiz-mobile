import React, {useContext, useReducer} from 'react'
import { AppContext } from './AppContext';
import { mainInitialState } from './AppState';
import { authReducer } from './auth/AuthReducer';


export const useAppValue = () => {
    const [state,dispatch] = useContext(AppContext)
    return {state, dispatch}
}

export const AppProvider = ({children}) => {

  return (
    <AppContext.Provider value={useReducer(mainReducer, mainInitialState)}>
      {children}
    </AppContext.Provider>
  )
};

export const mainReducer = (state,action) => ({
    auth: authReducer(state.auth,action)
})