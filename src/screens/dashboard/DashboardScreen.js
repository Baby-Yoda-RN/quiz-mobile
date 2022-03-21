import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {
  Button,
  ProgressBar,
  Icon,
  Header,
  ListView,
  ListItem,
} from '../../components';

export const DashboardScreen = () => {
  return (
    <View>
      <Header />

      <ListView />
    </View>
  );
};
