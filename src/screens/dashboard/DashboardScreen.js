import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
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
        const data = await quizAPI.get('/getalltests');
        setData(data.data);
        setIsLoading(false);
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
        <Container isLoading={isLoading} />
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
