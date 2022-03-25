import React from 'react';
import {View, Text} from 'react-native';
import {
  Header,
  ListView,
  ProgressBar,
  Container,
  Highlighter,
} from '../../components';

export const DetailScreen = () => {
  return (
    <View>
      <Header />
      <ProgressBar />
      <Highlighter />
    </View>
  );
};
