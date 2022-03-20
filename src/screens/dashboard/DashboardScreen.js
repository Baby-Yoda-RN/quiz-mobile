import React from 'react';
import {Text, View} from 'react-native';
import {Button, ProgressBar, Icon} from '../../components';

export const DashboardScreen = () => {
  return (
    <View>
      <Icon iconSize={'regular'} iconName={'boxes'} iconColor={'#000000'} />
      <ProgressBar percentage={44} />
      <Text>Initial Screen</Text>

      <Button
        title={'Sample Button'}
        onPress={() => console.log('Sample Button Press')}
        isDisabled={false}
        buttonStyle={{width: '75%', alignSelf: 'center', height: '20%'}}
        titleStyle={{fontStyle: 'italic'}}
      />
    </View>
  );
};
