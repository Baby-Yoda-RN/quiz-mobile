import {StatusBar, StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        //flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'center',
        //alignContent: 'space-around',
        marginVertical: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#7199FF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
});
