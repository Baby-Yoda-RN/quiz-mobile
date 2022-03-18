import React from 'react';
import {SafeAreaView, FlatList, Text, View } from 'react-native';
import {Styles} from './ListScreen.style';

export const ListScreen = ({item,newData},...rest) => {
  
  const renderItem = ({item}) => (
    <Item title={item.title} />
  );

  const Item = ({ title }) => (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={newData}
        renderItem={renderItem}{...rest}
      />
    </SafeAreaView>
  );
  
  
};