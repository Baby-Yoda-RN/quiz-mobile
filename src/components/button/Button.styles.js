import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 8,
        justifyContent: 'center',
        width: '75%',
        height: '5%'
    },
    buttonDisabled: {
        backgroundColor: '#D1D1D1',
    },
    buttonEnabled: {
        backgroundColor: '#7199FF',
    },
    title: {
        fontSize: 23,
        lineHeight: 34,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})