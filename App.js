import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Context
import {AuthContext} from './src/context/auth/AuthContext';
import {reducer, initialState} from './src/context/auth/AuthReducer';
import {AuthNavigation} from './src/navigation/authNavigation/AuthNavigation';
import { AppNavigation } from './src/navigation/appNavigation/AppNavigation'
import { SplashScreen } from './src/screens/splash/SplashScreen';

//utilities
import {getLoginData} from './src/utilities/getLoginData'

const Stack = createNativeStackNavigator()
const TOKEN_NAME = 'userAuthToken'

export const App = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {

    const getData = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem(TOKEN_NAME);
      } catch (error) {
        console.log(error);
      }
      dispatch({type: 'RESTORE_TOKEN', token: token});
    };
    getData();
  }, []);

  const authMemo = React.useMemo(
    () => ({
      signIn: async (values) => {
        let data = getLoginData(values)
        console.log(data)
        if(data.error){
          return data
        }
        try {
          await AsyncStorage.setItem(TOKEN_NAME, data.tokenValue);
        } catch (e) {
          // saving error
        }
        dispatch({type: 'SIGN_IN', token: data.tokenValue});
      },
      signOut: async () => {
        try {
          await AsyncStorage.setItem(TOKEN_NAME, null);
        } catch (e) {
          // saving error
        }
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authMemo} >
      <NavigationContainer>
        {state.isLoading ? (
          <Stack.Screen name='Splash' component={SplashScreen}/>
        ) :
        state.token ? (
          <AppNavigation/>
        ) : (
          <AuthNavigation/>
        )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
