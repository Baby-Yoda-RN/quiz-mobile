import React, {useState} from 'react';
import {ListViewInfo} from './ListView.view';
import Axios from 'axios';
import {FlatList} from 'react-native';

export const ListView = () => {

  const url = 'http://ec2-54-218-161-100.us-west-2.compute.amazonaws.com:3000/api/getalltests';
  const body = {TableName: 'Tests'};
  const [data, setData] = useState("");

  
  Axios.post (url, body, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then (({data}) => {
    setData(data.Items)
    
  }).catch(function(error){
    console.log('Error');d
  })
 
  console.log(data);
  return <ListViewInfo data={data} />;
};
