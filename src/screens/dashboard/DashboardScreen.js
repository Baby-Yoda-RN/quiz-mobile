<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {Header, Container,} from '../../components';
import { ListViewInfo } from '../../components/listView/ListView.view';
import {quizAPI} from '../../configuration/Axios.configuration';
=======
import React from 'react';
import {View} from 'react-native';
import {Container, Header, ListView} from '../../components';
>>>>>>> main

export const DashboardScreen = () => {

  //const url = 'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getalltests';
  const [quiz, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect( () => {
    const fetchData = async () =>{
      setIsLoading(true);
      try {
        quizAPI.get().then (({data}) => {
          const sortData = data.sort((firstItem, secondItem) => firstItem.id - secondItem.id);
          setData(sortData);
          setIsLoading(false);
        })
      }catch (error){
        console.error(error)
      }finally{
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
<<<<<<< HEAD
    <>
      <Header leftElement={<Text>Hello</Text>} />
      <Container isLoading={isLoading}>
      <ListViewInfo data={quiz} />
      </Container>
    </>
=======
    <View>
      <Header />
      <Container>
        <ListView />
      </Container>
    </View>
>>>>>>> main
  );
};
