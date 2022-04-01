import React from 'react';
import { initialState } from './AuthReducer';

const AuthContextData = {
    state:initialState,
    signIn:()=>{},
    signOut:()=>{},
}

export const AuthContext = React.createContext(AuthContextData);