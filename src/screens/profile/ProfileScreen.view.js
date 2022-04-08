import React from 'react';
import {Text, Image} from 'react-native';
import {Header, Container} from '../../components';
import { styles } from './ProfileScreen.styles';

export const ProfileScreenView = ({navigation, signOut, userInfo, isLoading}) => {
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
          <Container 
            isLoading={isLoading}
          >
            {userInfo.image.length > 0 && (
              <Image
                source={{
                  uri: userInfo.image,
                }}
                style={{width: 75, height: 75, borderRadius: 100}}
              />
            )}
            <Text style={styles.text}>Email: {userInfo.email}</Text>
            <Text style={styles.text}>Name: {userInfo.name}</Text>
            <Text style={styles.text}>Test Scores: </Text>
            {Object.keys(userInfo.scores).map(key => (
              <Text key={key} style={styles.scores}>
                Test {Number(key) + 1}: {userInfo.scores[key]}
              </Text>
            ))}
          </Container>
        </>
  );
};
