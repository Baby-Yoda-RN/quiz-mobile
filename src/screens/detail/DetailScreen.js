import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {quizAPI} from '../../configuration/Axios.configuration';
import {DetailScreenView} from './DetailScreen.view';

export const DetailScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
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

  useEffect(() => {
    if (userAnswers.length > lastIndex)
      goToResultScreen(navigation, 'Result', userAnswers);
  }, [userAnswers.length]);

  return (
    <DetailScreenView
      navigation={navigation}
      currentQuestion={currentQuestion}
      questions={questions}
      isLoading={isLoading}
      userAnswers={userAnswers}
      lastIndex={lastIndex}
      setCurrentQuestion={setCurrentQuestion}
      setUserAnswers={setUserAnswers}
      goToNextQuestion={goToNextQuestion}
      goToResultScreen={goToResultScreen}
    />
  );
};
