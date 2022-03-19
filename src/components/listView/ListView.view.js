import React from 'react';
import { Text, FlatList, View} from 'react-native';
import { styles } from './ListView.styles';

export const ListViewInfo = ({data, ...rest}) => {
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
        </View>
    );
}