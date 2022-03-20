import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const style = StyleSheet.create({
    elementContainer: {
        alignItems: 'flex-end',
        borderBottomWidth: size.xs,
        borderColor: color.lightGray,
        display: 'flex',
        flexDirection: 'row',
        height: size.xl,
        justifyContent: 'space-between',
        paddingHorizontal: size.sm,
        paddingVertical: size.sm,
    },
    headerTitleContainer: {
        marginHorizontal: size.sm,
        marginVertical: size.sm,
    },
    leftElementContainer: {
        marginHorizontal: size.sm,
        marginVertical: size.sm,
    },
    rightElementContainer: {
        marginHorizontal: size.sm,
        marginVertical: size.sm,
    }
});

