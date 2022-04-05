import React from 'react'
import {View, Text} from 'react-native'
import {Button, Container, Header, Icon, Card} from '../../components'
import {style} from '../../components/container/Container.styles'
import {color} from '../../theme'
import {styles} from './ResultScreen.styles'
import {useNavigation, useRoute} from '@react-navigation/native';

export const ResultScreen = () => {
  const route = useRoute();
  const data = {
    userAnswers: route.params,
  };
 
  const numberOfQuestions = route.params.length;

  console.log(numberOfQuestions);
  
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
    <Card 
    />
    <Button  title={'Go to Dashboard'} buttonStyle={styles.button}/>
  </Container>
  </>
  )
}