import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, Image} from 'react-native';
import {quizAPI} from '../../configuration/Axios.configuration';
import {Header, Container} from '../../components';
import {useNavigation} from '@react-navigation/native';
import { useAppValue } from '../../context/AppProvider';
import { removeData } from '../../utilities/localStorage';
import {TOKEN_KEY, SIGN_OUT} from '../../constants'
import { ProfileScreenView } from './ProfileScreen.view';

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


  const fetchData = async () => {
    setIsLoading(true);
    try {
      quizAPI
        .get('profile', {headers: {Authorization: state.auth.token}})
        .then(({data}) => {
          setUserInfo({
            name: data.Name,
            email: data.Email,
            image: data.Image,
            scores: data.Scores,
          });
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
