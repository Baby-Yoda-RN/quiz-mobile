import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Button, Container, Header, Card} from '../../components';
import {quizAPI} from '../../configuration/Axios.configuration';
import {color} from '../../theme';
import {styles} from './ResultScreen.styles';

export const ResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const numQuestions = route.params.length;

  const data = {
    userAnswers: route.params,
  };

  useEffect(() => {
    const checkTestAnswers = () => {
      setIsLoading(true);
      quizAPI
        .post('/checkanswers', data)
        .then(response => {
          setScore(response.data);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => setIsLoading(false));
    };
    checkTestAnswers();
  }, []);

  let textMessage, customScoreStyle;

  if (score >= 0.6) {
    textMessage = 'Congratulations! \n You passed the test';
    customScoreStyle = {color: color.midGreen};
  } else {
    textMessage = "Sorry! \n You didn't pass the test";
    customScoreStyle = {color: color.darkRed};
  }

  const numAnswersCorrect = score * numQuestions;

  return (
    <>
      <Header
        rightIconSet={'MaterialCommunityIcons'}
        rightIconName={'account-circle-outline'}
        rightOnPress={() => navigation.push('Profile')}
      />
      <Container background={color.midGray} containerStyle={styles.container}>
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
