import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Axios from 'axios';
import {Header, Container} from '../../components';
import { ListViewInfo } from '../../components/listView/ListView.view';

export const DashboardScreen = () => {

  const url = 'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getalltests';
  const [tests, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect( () => {
    const fetchData = async () =>{
      setIsLoading(true);
      try {
        Axios.get(url).then (({data}) => {
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
    <View>
      <Header />
      <ListViewInfo data={tests} />
      <Container isLoading = {isLoading} />
    </View>
  );
};
