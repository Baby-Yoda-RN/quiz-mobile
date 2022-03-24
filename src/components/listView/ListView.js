import React, {useState, useEffect} from 'react';
import {ListViewInfo} from './ListView.view';
import Axios from 'axios';
import {Container} from '../container/Container';

export const ListView = () => {

  const url = 'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getalltests';
  const [tests, setData] = useState();
  const [loading, setIsLoading] = useState(false);

  useEffect( () => {
    setIsLoading(true);
     Axios.get(url).then (({data}) => {
      const returnData = data.Items;
      const sortData = returnData.sort((firstItem, secondItem) => firstItem.id - secondItem.id);
      setData(sortData);
      <Container isLoading = {loading} />
      setIsLoading(false);
    }).catch(error => console.error(error))
  }, []);

  return <Container isLoading = {loading} />, <ListViewInfo data={tests} />;
};