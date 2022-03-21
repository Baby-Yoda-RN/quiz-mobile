import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {styles} from './ListView.styles';
import {ListItem} from '../';

export const ListViewInfo = ({data, ...rest}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ListItem title={item.title} subTitle={item.subtitle} />
        )}
      />
    </View>
  );
};
