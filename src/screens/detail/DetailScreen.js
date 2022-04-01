import React, {useState, useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {QuizContext} from '../../context';
import {
  Button,
  Header,
  ProgressBar,
  Container,
  Highlighter,
  StepsProgress,
  Icon,
  TextInput,
} from '../../components';
import {quizAPI} from '../../configuration/Axios.configuration';
import {color, size} from '../../theme';

export const DetailScreen = ({navigation}) => {
  //BLOCKER: will receive questionCategory or testId from Michael
  //const {questionCategory} = useContext(QuizContext);

  const [questions, setQuestions] = useState();
  const [userAnswers, setUserAnswers] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState();

  const fetchData = async (
    quizAPI,
    // change 'getquestions/computer' to questionCategory end point after receive from blocker
    endPoint = 'getquestions/computer',
    setIsLoading,
    setQuestions,
  ) => {
    setIsLoading(true);
    try {
      await quizAPI.get(endPoint).then(({data}) => {
        setQuestions(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(quizAPI, undefined, setIsLoading, setQuestions);
  }, []);

  const goToNextQuestion = (
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  ) => {
    if (currentQuestionIndex < questions.length) {
      userAnswers
        ? setUserAnswers(prev => [
            ...prev,
            {id: questions[currentQuestionIndex].id, userAnswer: currentAnswer},
          ])
        : setUserAnswers([
            {id: questions[currentQuestionIndex].id, userAnswer: currentAnswer},
          ]);

      setCurrentAnswer();

      if (currentQuestionIndex >= questions.length - 1){
        setCurrentQuestionIndex(questions.length - 1);
        navigation.push('Result');
      }
      else setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <QuizContext.Provider
      value={{userAnswers, questions, currentQuestionIndex}}>
      <Header
        leftElement={<Icon iconSet={'AntDesign'} iconName={'arrowleft'} />}
        headerTitle={
          <StepsProgress
            currentStep={currentQuestionIndex + 1}
            totalSteps={questions && questions.length}
          />
        }
        rightElement={
          <Icon
            iconSet={'MaterialCommunityIcons'}
            iconName={'account-circle-outline'}
          />
        }
      />
      <Container>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <ProgressBar
              style={{marginVertical: size.rg}}
              percentage={
                questions &&
                userAnswers &&
                (userAnswers.length / questions.length) * 100
              }
            />
            <Highlighter
              newCodeString={
                questions && questions[currentQuestionIndex].question
              }
            />
            <TextInput
              style={{marginTop: size.lg}}
              placeholder="Answer"
              placeholderTextColor={color.placeHolderGray}
              onChangeText={newText => setCurrentAnswer(newText)}
              value={currentAnswer}
            />
            <Button
              isDisabled={
                !currentAnswer ||
                (userAnswers && userAnswers.length === questions.length)
                  ? true
                  : false
              }
              buttonStyle={{paddingVertical: size.sm, marginVertical: size.rg}}
              title="Next"
              onPress={() => {
                goToNextQuestion(
                  questions,
                  currentQuestionIndex,
                  setCurrentQuestionIndex,
                );
              }}
            />
          </>
        )}
      </Container>
    </QuizContext.Provider>
  );
};
