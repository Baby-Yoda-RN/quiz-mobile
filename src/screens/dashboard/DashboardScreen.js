import React from 'react';
import {View} from 'react-native';
import {Container, Header, ListView} from '../../components';

export const DashboardScreen = () => {
  return (
    <View>
      <Header />
      <Container>
        <ListView />
      </Container>
    </View>
  );
};
