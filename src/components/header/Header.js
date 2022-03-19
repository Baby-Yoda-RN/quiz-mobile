import React from 'react';
import {View, Text} from 'react-native';
import {style} from './Header.styles';

export const Header = ({
                        leftElement, 
                        rightElement, 
                        headerTitle, 
                        leftElementContainerStyle, 
                        rightElementContainerStyle,
                        headerTitleContainerStyle, 
                        ...rest
                    }) => {

    return(
        <View style={style.elementContainer} {...rest} >
            {
                [
                    {key: 0, name: leftElement, style: leftElementContainerStyle},
                    {key: 1, name: headerTitle, style: headerTitleContainerStyle},
                    {key: 2, name: rightElement, style: rightElementContainerStyle},
                ].map(component => 
                    /*Check if leftElement NOT undefined. If so, check if leftElement is a valid component. If so render leftElement as is. Else, render in Text.*/
                    !!component.name && 
                        (React.isValidElement(component.name) ? 
                        <View style={[style[component.name + 'Container'], component.style]} key={component.key}>{component.name}</View>
                        : <Text key={component.key}>{component.name}</Text>)
                )
            }
        </View>
    );
};

