import React from 'react';
import {View, Text} from 'react-native';
import {style} from './Header.styles';

export const Header = ({leftIcon=<></>, rightIcon=<></>, title, customStyle, ...rest}) => {

    /* leftIcon and rightIcon must be a RN component. If string is received, will cause error.
    *  title can be either RN component or string.
    *  Use customStyle like this in prop: customStyle = {{paddingHorizontal: 25;}};
    */

    return(
        <View style={[style.container, customStyle]} {...rest} >
            <View>
                {leftIcon}
            </View>
            <View>
                {/*Check if title exists. If so, check type and render conditionally.*/}
                {title && (typeof title === 'string'? <Text>{title}</Text>:title )}
            </View>
            <View>
                {rightIcon}
            </View>
        </View>
    );
};

