import React, {useState, useContext, useEffect, useReducer} from 'react';
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
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    index: 0,
    question: '',
    answer: '',
    progress: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const {
    params: {id: testId},
  } = useRoute();

  const fetchQuestions = async (endPoint, states, actions) => {
    const [setQuestions, setIsLoading, setCurrentQuestion] = actions;

    setIsLoading(true);
    try {
      await quizAPI.get(endPoint).then(({data}) => {
        setQuestions(data);
        setIsLoading(false);
        setCurrentQuestion({
          ...states,
          question: data[states.index || 0].question,
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions(`getquestions/${testId}`, currentQuestion, [
      setQuestions,
      setIsLoading,
      setCurrentQuestion,
    ]);
  }, []);

  const goToNextQuestion = (data, states, action) => {
    let currentIndex;
    let lastIndex = data.length - 1;
    if (states.index + 1 > lastIndex) {
      currentIndex = lastIndex;
      navigation.push('Result');
    } else currentIndex = states.index + 1;

    action({
      ...states,
      index: currentIndex,
      progress: ((currentIndex + 1) / data.length) * 100,
      question: data[currentIndex].question,
      answer: '',
    });
  };

  const saveUserAnswers = (input, states, action) => {
    let currentAnswer = {
      id: questions[states.length].id,
      userAnswer: input,
    };

    action([...states, currentAnswer]);
  };

  return (
    <AppContext.Provider value={{userAnswers, questions}}>
      <Header
        leftElement={<Icon iconSet={'AntDesign'} iconName={'arrowleft'} />}
        headerTitle={
          <StepsProgress
            currentStep={currentQuestion.index + 1}
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
              percentage={currentQuestion.progress}
            />
            <Highlighter newCodeString={currentQuestion.question} />
            <TextInput
              style={{marginTop: size.lg}}
              placeholder="Answer"
              placeholderTextColor={color.placeHolderGray}
              onChangeText={newText =>
                setCurrentQuestion({...currentQuestion, answer: newText})
              }
              value={currentQuestion.answer}
            />
            <Button
              isDisabled={currentQuestion.answer.length > 0 ? false : true}
              buttonStyle={{paddingVertical: size.sm, marginVertical: size.rg}}
              title="Next"
              onPress={() => {
                goToNextQuestion(
                  questions,
                  currentQuestion,
                  setCurrentQuestion,
                );
                saveUserAnswers(
                  currentQuestion.answer,
                  userAnswers,
                  setUserAnswers,
                );
              }}
            />
          </>
        )}
      </Container>
    </AppContext.Provider>
  );
};
