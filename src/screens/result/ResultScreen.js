import React, {useState, useEffect} from 'react';
import {Button, Container, Header, Icon, Card} from '../../components';
import {quizAPI} from '../../configuration/Axios.configuration';
import {color} from '../../theme';
import {styles} from './ResultScreen.styles';

export const ResultScreen = ({navigation}) => {
  const [numAnswersCorrect, setNumAnswersCorrect] = useState();

  // Use when context is set up
  // const {userAnswer} = useContext(QuizContext);

  // Dummy Data until context is set up
  const dummyData = {
    userAnswers: [
      {id: 100, userAnswer: "I don't know."},
      {id: 101, userAnswer: 'False'},
      {id: 102, userAnswer: 'Central Processing Unit'},
      {id: 103, userAnswer: 'Amazon'},
      {id: 104, userAnswer: 'GigaHerz'},
      {id: 105, userAnswer: 'False'},
      {id: 106, userAnswer: "I don't know."},
      {id: 107, userAnswer: "I don't know."},
      {id: 108, userAnswer: 'New Mexico.'},
      {id: 109, userAnswer: 'Content Delivery Network.'},
      {id: 110, userAnswer: 'Vista.'},
      {id: 111, userAnswer: '200'},
      {id: 112, userAnswer: '80'},
      {id: 113, userAnswer: 'False'},
      {id: 114, userAnswer: "I don't know."},
      {id: 115, userAnswer: "I don't know."},
      {id: 116, userAnswer: 'Android'},
      {id: 117, userAnswer: "I don't know."},
      {id: 118, userAnswer: "I don't know."},
      {id: 119, userAnswer: "I don't know."},
    ],
  };

  useEffect(() => {
    const checkTestAnswers = () => {
      quizAPI
        .post('/checkanswers', dummyData)
        .then(response => {
          setNumAnswersCorrect(20);
        })
        .catch(error => {
          console.error(error);
        });
    };
    checkTestAnswers();
  }, []);

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
      <Container background={color.midGray} containerStyle={styles.container}>
        <Card score={numAnswersCorrect} />
        <Button
          title={'Go to Dashboard'}
          buttonStyle={styles.button}
          onPress={() => console.log('Go to Dashboard')} // () => navigation.push('Dashboard') when global nav is set up
        />
      </Container>
    </>
  );
};
