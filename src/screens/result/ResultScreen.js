import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {
  Button,
  Container,
  Header,
  Icon,
  Card,
  Alert,
  TouchableHighlight,
} from '../../components';
import {style} from '../../components/container/Container.styles';
import {color} from '../../theme';
import {styles} from './ResultScreen.styles';
import {AppContext} from '../../context/AppContext';

export const ResultScreen = () => {
  const {signOut} = useContext(AppContext);

  const LogoutAlert = () => {
    Alert.alert('Logout', '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => signOut()},
    ]);
  };

  return (
    <>
      <Header
        rightElement={
          <TouchableHighlight onPress={LogoutAlert}>
            <Icon
              iconSet={'MaterialCommunityIcons'}
              iconName={'account-circle-outline'}
            />
          </TouchableHighlight>
        }
      />
      <Container background={color.midGray} containerStyle={styles.container}>
        <Card />
        <Button title={'Go to Dashboard'} buttonStyle={styles.button} />
      </Container>
    </>
  );
};
