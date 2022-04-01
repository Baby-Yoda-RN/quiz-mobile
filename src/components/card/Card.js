import React from 'react';
import {View, Text} from 'react-native';
import {color} from '../../theme';
import {styles} from './Card.style';

export const Card = ({
  textMessage,
  score = 10,
  customContainerSyle,
  customTextMessageStyle,
  customScoreStyle = {color: '#BC230E'},
  ...rest
}) => {
  if (score > 10) {
    textMessage = 'Congratulations! \n You passed the test';
    customScoreStyle = {color: color.midGreen};
  } else {
    textMessage = "Sorry! \n You didn't pass the test";
    customScoreStyle = {color: color.darkRed};
  }

  return (
    <View style={[styles.container, customContainerSyle]} {...rest}>
      <View>
        <Text style={[styles.textMessage, customTextMessageStyle]}>
          {textMessage}
        </Text>
      </View>
      <View>
        <Text style={[styles.score, customScoreStyle]}>{`${score}/20`}</Text>
      </View>
    </View>
  );
};
