import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Card.style';

export const Card = ({textMessage = "Sorry! \n You didn't pass the test", 
  score="15/20", 
  customContainerSyle,
  customTextMessageStyle,
  customScoreStyle={color:'#BC230E'}, 
  ...rest}) => {
  return (
    <View style={[styles.container, customContainerSyle]}{...rest}>
      <View>
        <Text style={[styles.textMessage, customTextMessageStyle]}>
          {textMessage}
        </Text>
      </View>
      <View>
        <Text style={[styles.score, customScoreStyle]}>{score}</Text>
      </View>
    </View>
  );
};
