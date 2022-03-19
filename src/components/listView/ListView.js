import React from 'react';
import { ListViewInfo } from './ListView.view';

export const ListView = () => {
    
    const data = [{key: 'Charlie'}, {key: 'Michael'}, {key: 'Dulaya'},
    {key: 'Leo'}, {key: 'Nicholas'}, {key: 'Miguel'}, {key: 'Rahmi'}];
    
    return <ListViewInfo data={data} />
}