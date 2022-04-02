import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Header, Container, Icon, ListItem, ListView} from '../../components';
// import {ListViewInfo} from '../../components/listView/ListView.view';
import {quizAPI} from '../../configuration/Axios.configuration';
import {color, size} from '../../theme';
import {useNavigation} from '@react-navigation/native';

export const DashboardScreen = () => {
  const [quiz, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        quizAPI.get('/getalltests').then(({data}) => {
          const sortData = data.sort(
            (firstItem, secondItem) => firstItem.id - secondItem.id,
          );
          setData(sortData);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
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
      <Container>
        <FlatList
          contentContainerStyle={{paddingVertical: size.sm}}
          ItemSeparatorComponent={() => <View style={{padding: size.sm}} />}
          data={quiz}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              subTitle={item.subtitle}
              onPress={() => {
                navigation.push('Detail', item.id);
              }}
            />
          )}
        />
      </Container>
    </>
  );
};
