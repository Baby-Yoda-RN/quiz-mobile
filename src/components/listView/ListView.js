import React from 'react';
import {ListViewInfo} from './ListView.view';

import {FlatList} from 'react-native';

export const ListView = () => {
  const tests = [
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

  return <ListViewInfo data={tests} />;
};
