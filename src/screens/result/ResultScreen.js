import React from 'react';
import {View, Text} from 'react-native';
import {
  Button,
  Header,
  ListView,
  ProgressBar,
  Container,
  Highlighter,
  StepsProgress,
  Icon,
  TextInput,
} from '../../components';
import {color, size} from '../../theme';

export const ResultScreen = () => {
  return (
    <>
      <Header
        rightElement={
          <Icon
            iconSet={'MaterialCommunityIcons'}
            iconName={'account-circle-outline'}
          />
        }
      />
      <Container>
        <ProgressBar />
        <Highlighter 
          StepsProgres={<StepsProgress />}
        />
        <Button title="Next" />
      </Container>
    </>
  );
};
