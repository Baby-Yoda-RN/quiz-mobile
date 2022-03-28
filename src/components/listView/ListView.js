import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {styles} from './ListView.styles';
import {ListItem} from '..';
import {size} from '../../theme';

export const ListView = ({data, ...rest}) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingVertical: size.sm}}
        ItemSeparatorComponent={() => <View style={{padding: size.sm}} />}
        data={data}
        renderItem={({item}) => (
          <ListItem title={item.title} subTitle={item.subtitle} />
        )}
      />
    </View>
  );
};
