import React from 'react'
import {View, Text} from 'react-native'
import {Button, Container, Header, Icon, Card} from '../../components'
import {style} from '../../components/container/Container.styles'
import {color} from '../../theme'
import {styles} from './ResultScreen.styles'

export const ResultScreen = () => {
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