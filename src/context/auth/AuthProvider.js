import React, {useEffect, useMemo, useReducer} from 'react'
import {reducer, initialState} from './AuthReducer'
import {getData, storeData, removeData} from '../../utilities/localStorage'
import { getLoginData } from '../../utilities/getLoginData'
import { AuthContext } from './AuthContext'

export const TOKEN_KEY = 'token'
const RESTORE_TOKEN = 'RESTORE_TOKEN'
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'


export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const isAuth = async () => {
        let token = await getData(TOKEN_KEY)
        dispatch({type:RESTORE_TOKEN,token:token})
    }
    isAuth()
    },[])

    const signIn = async (values) => {
        let data = await getLoginData(values)
        if(data.error){
            return data
        }
        await storeData(TOKEN_KEY,data.token)
        dispatch({type:SIGN_IN, token:data.token})
        return data
    }

    const signOut = async () => {
        await removeData(TOKEN_KEY)
        dispatch({type:SIGN_OUT})
    }

    const value = useMemo(() => {
        return {state, signIn, signOut}
    },[state])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}