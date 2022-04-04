import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, FlatList, TouchableHighlight, Alert} from 'react-native';
import {Header, Container, Icon, ListItem, ListView} from '../../components';
// import {ListViewInfo} from '../../components/listView/ListView.view';
import {quizAPI} from '../../configuration/Axios.configuration';
import {color, size} from '../../theme';

export const DashboardScreen = ({navigation}) => {
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

  const LogoutAlert = () =>
    Alert.alert('Logout?', '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {}},
    ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: color.lightGray,
      },
      headerRight: () => (
        <Header
          rightElement={
            <TouchableHighlight onPress={LogoutAlert}>
              <Icon
                iconSet={'MaterialCommunityIcons'}
                iconName={'account-circle-outline'}
              />
            </TouchableHighlight>
          }
        />
      ),
      headerTitle: '',
    });
  }, [navigation]);

  return (
    <>
      <Container>
        <ListView data={quiz}></ListView>
      </Container>
    </>
  );
};
