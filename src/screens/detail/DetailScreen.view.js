import React from 'react';
import {
  Button,
  Header,
  ProgressBar,
  Container,
  StepsProgress,
  TextInput,
  Card,
} from '../../components';
import {color, size} from '../../theme';
import {styles} from './DetailScreen.styles';

export const DetailScreenView = ({
  navigation,
  currentQuestion,
  questions,
  isLoading,
  userAnswers,
  lastIndex,
  setCurrentQuestion,
  setUserAnswers,
  goToNextQuestion,
}) => {

  let questionsContainerSyle = {flex: 1, paddingVertical: size.sm};
  
  return (
    <>
      <Header
        leftIconSet={'AntDesign'}
        leftIconName={'arrowleft'}
        leftOnPress={() => navigation.push('Dashboard')}
        headerElement={
          <StepsProgress
            currentStep={currentQuestion.index + 1}
            totalSteps={questions.length || 20}
          />
        }
        rightIconSet={'MaterialCommunityIcons'}
        rightIconName={'account-circle-outline'}
        rightOnPress={() => navigation.push('Profile')}
      />
      <Container isLoading={isLoading}>
        <ProgressBar
          style={styles.progressBar}
          percentage={currentQuestion.progress}
        />
        <Card 
          textMessage={currentQuestion.question} 
          isLoading = {isLoading}
          isQuestion = {true}
          customContainerSyle = {questionsContainerSyle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Answer"
          placeholderTextColor={color.placeHolderGray}
          onChangeText={newText => {
            setCurrentQuestion({...currentQuestion, answer: newText});
          }}
          value={currentQuestion.answer}
        />
        <Button
          isDisabled={currentQuestion.answer.length > 0 ? false : true}
          title="Next"
          onPress={() => {
            goToNextQuestion(
              questions,
              [currentQuestion, userAnswers],
              [setCurrentQuestion, setUserAnswers],
              lastIndex,
            );
          }}
        />
      </Container>
    </>
  );
};
