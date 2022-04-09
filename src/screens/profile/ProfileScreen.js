import React, {useEffect, useState} from 'react';
import {ProfileScreenView} from './ProfileScreen.view'
import {quizAPI} from '../../configuration/Axios.configuration';
import {useNavigation} from '@react-navigation/native';
import { useAppValue } from '../../context/AppProvider';
import { removeData } from '../../utilities/localStorage';
import {TOKEN_KEY, SIGN_OUT} from '../../constants/constants'
import axios from 'axios';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {state,dispatch} = useAppValue()
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    image: '',
    scores: 0,
  });

  const signOut = async () => {
    await removeData(TOKEN_KEY);
    dispatch({type: SIGN_OUT});
  };

  useEffect(() => {
    let isMounted = true
    setIsLoading(true);
    const source = axios.CancelToken.source()
    const fetchData = async () => {
    try {
      quizAPI
        .get('profile', {
          headers: {Authorization: state.auth.token},
          cancelToken:source.token,
        })
        .then(({data}) => {
          if(isMounted){
            setUserInfo({
              name: data.Name,
              email: data.Email,
              image: data.Image,
              scores: data.Scores,
            });
          }
        });
    } catch (error) {
      if(quizAPI.isCancel(error)){
      }else{
        console.error(error);
      }
    } finally {
      if(isMounted)
        setIsLoading(false);
    }
  };
    fetchData();
    return () => {isMounted = false}
  }, []);

  return (
    <ProfileScreenView 
      navigation={navigation}
      signOut={signOut}
      userInfo={userInfo}
      isLoading={isLoading}
    />
  );
};
