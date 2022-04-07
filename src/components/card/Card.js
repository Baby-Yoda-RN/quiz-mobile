import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {color} from '../../theme';
import {styles} from './Card.style';

export const Card = ({
  textMessage,
  score = '10/20',
  customContainerSyle,
  customTextMessageStyle,
  customScoreStyle = {color: '#BC230E'},
  isLoading = false,
  isQuestion = false,
  ...rest
}) => {
  return (
    <View style={[styles.container, customContainerSyle]} {...rest}>
      <View>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={color.primary} />
        ) : (
          <View>
            <Text style={[styles.textMessage, customTextMessageStyle]}>
              {textMessage}
            </Text>
            {isQuestion ? (
              null
            ):(
              <Text style={[styles.score, customScoreStyle]}>{score}</Text>
            )}
            
          </View>
        )}
      </View>
    </View>
  );
};
