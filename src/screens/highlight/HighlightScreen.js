import React from 'react';
import {View} from 'react-native';
import {
  Header,
  ListView,
  ProgressBar,
  Container,
  Highlighter,
} from '../../components';

export const HighlightScreen = () => {
  return (
    <View>
      <Header />
      <Container>
        <ProgressBar />
      </Container>
      <Highlighter />
      <View></View>
    </View>
  );
};
