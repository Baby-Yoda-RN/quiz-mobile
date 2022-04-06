import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, Text, Image} from 'react-native';
import {quizAPI} from '../../configuration/Axios.configuration';
import {Header, Container} from '../../components';
import {AppContext} from '../../context/AppContext';
import {useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {signOut, state} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();

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
    <>
      <Header
        leftIconSet={'AntDesign'}
        leftIconName={'arrowleft'}
        leftOnPress={() => navigation.push('Dashboard')}
        rightIconSet={'AntDesign'}
        rightIconName={'logout'}
        rightOnPress={() => signOut()}
      />

      {isLoading || !userInfo ? (
        <>
          <ActivityIndicator size="large" />
          <Text>{isLoading}</Text>
        </>
      ) : (
        <>
          <Container>
            {userInfo.image.length > 0 && (
              <Image
                source={{
                  uri: userInfo.image,
                }}
                style={{width: 75, height: 75, borderRadius: 100}}
              />
            )}
            <Text>Email: {userInfo.email}</Text>
            <Text>Name: {userInfo.name}</Text>
            <Text>Test Scores: </Text>
            {Object.keys(userInfo.scores).map(key => (
              <Text key={key}>
                Test {Number(key) + 1}: {userInfo.scores[key]}
              </Text>
            ))}
          </Container>
        </>
      )}
    </>
  );
};
