import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Container, Header, ListItem} from '../../components';
import {size} from '../../theme/size';

export const DashboardScreen = () => {
  const data = [
    {
      title: 'Test 1',
      subtitle: 'Test one is about this',
    },
    {
      title: 'Test 2',
      subtitle: 'Test two is about this',
    },
    {
      title: 'Test 3',
      subtitle: 'Test three is about this',
    },
    {
      title: 'Test 4',
      subtitle: 'Test four is about this',
    },
    {
      title: 'Test 5',
      subtitle: 'Test five is about this',
    },
    {
      title: 'Test 6',
      subtitle: 'Test six is about this',
    },
    {
      title: 'Test 7',
      subtitle: 'Test seven is about this',
    },
  ];

  return (
    <>
      <Header leftElement={<Text>Hello</Text>} />
      <Container>
        <FlatList
          ItemSeparatorComponent={() => <View style={{padding: size.sm}} />}
          data={data}
          renderItem={({item}) => (
            <ListItem title={item.title} subTitle={item.subtitle} />
          )}
        />
      </Container>
    </>
  );
};
