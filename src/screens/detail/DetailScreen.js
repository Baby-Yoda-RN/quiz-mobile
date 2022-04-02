import React, {useState, useContext, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {AppContext} from '../../context/AppContext';
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

export const DetailScreen = () => {
  const [questions, setQuestions] = useState();
  const [userAnswers, setUserAnswers] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();
  const [progress, setProgress] = useState(currentIndex + 1);
  const [progressPercent, setProgressPercent] = useState();

  const navigation = useNavigation();
  const {
    params: {id: testId},
  } = useRoute();

  const fetchData = async (
    quizAPI,
    endPoint = 'getquestions/computer',
    setIsLoading,
    setQuestions,
    setCurrentQuestion,
  ) => {
    setIsLoading(true);
    try {
      await quizAPI.get(endPoint).then(({data}) => {
        setQuestions(data);
        setIsLoading(false);
        setCurrentQuestion(data[currentIndex].question);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(
      quizAPI,
      `getquestions/${testId.toString()}`,
      setIsLoading,
      setQuestions,
      setCurrentQuestion,
    );
  }, []);

  const goToNextQuestion = (
    questions,
    currentIndex,
    setCurrentIndex,
    setCurrentQuestion,
  ) => {
    if (userAnswers) {
      setUserAnswers(previousAnswers => [
        ...previousAnswers,
        {id: questions[currentIndex].id, userAnswer: currentAnswer},
      ]);
    } else {
      setUserAnswers([
        {id: questions[currentIndex].id, userAnswer: currentAnswer},
      ]);
    }

    const nextIndex = currentIndex + 1;

    setCurrentAnswer();

    setCurrentIndex(nextIndex);

    setProgress(nextIndex + 1);

    setProgressPercent(((progress + 1) / questions.length) * 100);

    if (nextIndex < questions.length) {
      setCurrentQuestion(questions[nextIndex].question);
    }

    if (nextIndex >= questions.length) {
      navigation.push('Result');
    }
  };

  return (
    <AppContext.Provider value={{userAnswers, questions, currentIndex}}>
      <Header
        leftElement={<Icon iconSet={'AntDesign'} iconName={'arrowleft'} />}
        headerTitle={
          <StepsProgress
            currentStep={progress}
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
              percentage={progressPercent}
            />
            <Highlighter newCodeString={currentQuestion} />
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
                  currentIndex,
                  setCurrentIndex,
                  setCurrentQuestion,
                );
              }}
            />
          </>
        )}
      </Container>
    </AppContext.Provider>
  );
};
