import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
} from 'react-native';
import {Header, Container, ListItem} from '../../components';
import {quizAPI} from '../../configuration/Axios.configuration';
import {size} from '../../theme';
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
          setData(data);
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
        rightIconSet={'MaterialCommunityIcons'}
        rightIconName={'account-circle-outline'}
        rightOnPress={() => navigation.push('Profile')}
      />

      {isLoading || !quiz ? (
        <ActivityIndicator size="large" />
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
