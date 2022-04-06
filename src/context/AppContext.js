import React, {useEffect, useMemo, useReducer, createContext} from 'react';
import {globalInitialState, mainInitialState, reducer} from './AppState';
import {getData, storeData, removeData} from '../utilities/localStorage';
import { getLoginData } from '../data/getLoginData';

//export const AppContext = createContext();

export const TOKEN_KEY = 'authToken';
const RESTORE_TOKEN = 'RESTORE_TOKEN';
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

