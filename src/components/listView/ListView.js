import React, {useState, useEffect} from 'react';
import {ListViewInfo} from './ListView.view';
import Axios from 'axios';

export const ListView = () => {

  const url = 'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getalltests';
  const body = {TableName: 'Tests'};
  const [tests, setData] = useState();

  useEffect( () => {
     Axios.post(url, body).then (({data}) => {
      const returnData = data.Items;
      const sortData = returnData.sort((firstItem, secondItem) => firstItem.id - secondItem.id);
      setData(sortData);
    }).catch(error => console.error(error))
  }, []);
  
  return <ListViewInfo data={tests} />;
};