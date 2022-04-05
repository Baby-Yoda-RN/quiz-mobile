import React, {useState, useEffect} from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState();
  const [lastIndex, setLastIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    index: 0,
    question: '',
    answer: '',
    progress: 0,
  });

  const navigation = useNavigation();
  const {
    params: {id: testId},
  } = useRoute();

  const fetchQuestions = async (api, states, setStates) => {
    const [quizAPI, endPoint] = api;
    const currentQuestion = states;
    const [setQuestions, setIsLoading, setCurrentQuestion, setLastIndex] =
      setStates;

    setIsLoading(true);

    try {
      await quizAPI.get(endPoint).then(({data}) => {
        setQuestions(data);
        setIsLoading(false);
        setCurrentQuestion({
          ...currentQuestion,
          question: data[currentQuestion.index || 0].question,
        });
        setLastIndex(data.length - 1);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions([quizAPI, `getquestions/${testId}`], currentQuestion, [
      setQuestions,
      setIsLoading,
      setCurrentQuestion,
      setLastIndex,
    ]);
  }, []);

  const goToNextQuestion = (data, states, setStates, constants) => {
    const questions = data;
    const [currentQuestion, userAnswers] = states;
    const [setCurrentQuestion, setUserAnswers] = setStates;
    const lastIndex = constants;

    if (userAnswers.length <= lastIndex) {
      let currentIndex;

      if (currentQuestion.index + 1 > lastIndex) {
        currentIndex = lastIndex;
      } else currentIndex = currentQuestion.index + 1;

      let tempAnswer = {
        id: userAnswers.length <= lastIndex && questions[userAnswers.length].id,
        userAnswer: currentQuestion.answer,
      };

      setCurrentQuestion({
        ...currentQuestion,
        index: currentIndex,
        progress: (currentIndex / questions.length) * 100,
        question:
          currentIndex < questions.length && questions[currentIndex].question,
        answer: '',
      });

      setUserAnswers([...userAnswers, tempAnswer]);
    }
  };

  const goToResultScreen = (navigation, location, data) => {
    const userAnswers = data;
    navigation.push(location, userAnswers);
  };

  return (
    <AppContext.Provider value={{userAnswers, questions}}>
      <Header
         leftElement={
          <TouchableOpacity onPress={() => {navigation.push('Dashboard')}}>
            <Icon iconSet={'AntDesign'} iconName={'arrowleft'} />
          </TouchableOpacity>
          }
        headerTitle={
          <StepsProgress
            currentStep={currentQuestion.index + 1}
            totalSteps={questions && questions.length}
          />
        }
        rightElement={
          <Icon iconSet={'MaterialCommunityIcons'} iconName={'account-circle-outline'}/>
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
            {userAnswers.length > lastIndex ? (
              <Button
                isDisabled={false}
                buttonStyle={{
                  paddingVertical: size.sm,
                  marginVertical: size.rg,
                }}
                title="Submit ?"
                onPress={() => {
                  if (userAnswers.length > lastIndex)
                    goToResultScreen(navigation, 'Result', userAnswers);
                }}
              />
            ) : (
              <>
                <TextInput
                  style={{marginTop: size.lg}}
                  placeholder="Answer"
                  placeholderTextColor={color.placeHolderGray}
                  onChangeText={newText => {
                    setCurrentQuestion({...currentQuestion, answer: newText});
                  }}
                  value={currentQuestion.answer}
                />
                <Button
                  isDisabled={currentQuestion.answer.length > 0 ? false : true}
                  buttonStyle={{
                    paddingVertical: size.sm,
                    marginVertical: size.rg,
                  }}
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
              </>
            )}
          </>
        )}
      </Container>
    </AppContext.Provider>
  );
};
