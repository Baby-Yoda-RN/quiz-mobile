import React, {useEffect, useState} from 'react';
import {ProfileScreenView} from './ProfileScreen.view';
import {quizAPI} from '../../configuration/Axios.configuration';
import {useNavigation} from '@react-navigation/native';
import {useAppValue} from '../../context/AppProvider';
import {removeData} from '../../utilities/localStorage';
import {TOKEN_KEY, SIGN_OUT} from '../../constants/constants';
import {Text} from 'react-native';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {dispatch} = useAppValue();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    image: '',
    scores: [0],
  });

  const signOut = async () => {
    await removeData(TOKEN_KEY);
    dispatch({type: SIGN_OUT});
  };

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const {
          data: {name, email, image, scores},
        } = await quizAPI.get('profile');

        if (isMounted) {
          setUserInfo({
            name,
            email,
            image,
            scores,
          });
        }
      } catch (error) {
        setError(true);
        if (quizAPI.isCancel(error)) {
        } else {
          console.error(error);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
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
