import React from 'react';
import {Button, Container, Header, Icon, Card} from '../../components';
import {color} from '../../theme';
import {styles} from './ResultScreen.styles';

export const ResultScreen = ({navigation}) => {
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
        <Card score={5} />
        <Button
          title={'Go to Dashboard'}
          buttonStyle={styles.button}
          // onPress={() => navigation.push('Dashboard')}
        />
      </Container>
    </>
  );
};
