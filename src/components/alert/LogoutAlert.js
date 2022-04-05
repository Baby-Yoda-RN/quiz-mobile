import React from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation();

export const LogoutAlert = () => {
  Alert.alert('Logout', '', [
    {
      text: 'Cancel',
      onPress: () => {},
      style: 'cancel',
    },
    {text: 'OK', onPress: () => signOut()},
  ]);
};
