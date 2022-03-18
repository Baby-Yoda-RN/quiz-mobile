/*import React from 'react';
import {DashboardScreen} from './src/screens/dashboard/DashboardScreen';

export const App = () => {
  return <DashboardScreen />;
};*/

import React from 'react';
import {DashboardScreen} from './src/screens/dashboard/DashboardScreen';
import {Header} from './src/components';
import {Text, Button} from 'react-native';

export const App = () => {
  return <Header 
          leftIcon={<Button onPress={() => alert('You Press Left!')} title={'Left'}/>}
          rightIcon={<Button onPress={() => alert('You Press Right!')} title={'Right'}/>}
          title={<Text style={{fontSize: 25}}>Quiz</Text>}
          customStyle={{}}
        />;
};