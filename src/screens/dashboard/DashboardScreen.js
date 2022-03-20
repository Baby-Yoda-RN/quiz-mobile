import React from 'react';
import {Icon} from '../../components/icon/Icon';
import {Text, View} from 'react-native';
import {Header} from '../../components';
import {Button} from '../../components';
import {ProgressBar} from '../../components/progressBar/ProgressBar';
import { color } from '../../theme';

export const DashboardScreen = () => {
  return (
    <View>
      <Header />
      <Icon iconSize={"regular"} iconName={"boxes"} iconColor={"#000000"}/>
      <ProgressBar percentage={44} />
      <Text>Initial Screen</Text>
      <Button />
    {/* <Icon iconSize={"regular"} iconName={"boxes"} iconColor={"#000000"}/> */}
    <ProgressBar percentage={44} />
    <Text>Initial Screen</Text> 
    {/* Inline styles for example only */}
    <Button title={'Sample Button'} onPress={() => console.log('Sample Button Press')} 
      isDisabled={false} buttonStyle={{width: '75%', alignSelf: 'center', height: '20%'}}
      titleStyle={{fontStyle: 'italic'}} />
    </View>
  );
};
