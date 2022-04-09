import React, {useState, useEffect} from 'react';
import { View, FlatList} from 'react-native';
import {Header, Container, ListItem} from '../../components';
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
      <Header
        rightIconSet={'MaterialCommunityIcons'}
        rightIconName={'account-circle-outline'}
        rightOnPress={() => navigation.push('Profile')}
      />

      {isLoading || !quiz ? (
        <Container isLoading={isLoading}>
      ) : (
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
                  navigation.push('Detail', {id: item.id});
                }}
              />
            )}
          />
        </Container>
      )}
    </>
  );
};
