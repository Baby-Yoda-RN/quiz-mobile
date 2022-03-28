import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Header, Container, Icon, ListItem, ListView} from '../../components';
// import {ListViewInfo} from '../../components/listView/ListView.view';
import {quizAPI} from '../../configuration/Axios.configuration';
import {color, size} from '../../theme';

export const DashboardScreen = () => {
  const [quiz, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
        <ListView data={quiz}></ListView>
      </Container>
    </>
  );
};
