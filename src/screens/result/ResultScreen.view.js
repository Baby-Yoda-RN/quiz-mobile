import React from 'react';
import {Header, Container, Card, Button} from '../../components';
import {styles} from './ResultScreen.styles';
import {color} from '../../theme';

export const ResultScreenView = ({
  numAnswersCorrect,
  numQuestions,
  textMessage,
  navigation,
  customScoreStyle,
  isLoading,
}) => {
  return (
    <>
      <Header
        rightIconSet={'MaterialCommunityIcons'}
        rightIconName={'account-circle-outline'}
        rightOnPress={() => navigation.push('Profile')}
      />
      <Container
        isLoading={isLoading}
        background={color.midGray}
        containerStyle={styles.container}>
        <Card
          score={`${numAnswersCorrect}/${numQuestions}`}
          isLoading={isLoading}
          textMessage={textMessage}
          customScoreStyle={customScoreStyle}
        />
        <Button
          title={'Go to Dashboard'}
          buttonStyle={styles.button}
          onPress={() => navigation.push('Dashboard')}
        />
      </Container>
    </>
  );
};
