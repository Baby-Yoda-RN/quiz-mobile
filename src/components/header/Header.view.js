import React from 'react';
import {View, Text} from 'react-native';
import {style} from './Header.style';

export const HeaderView = ({
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
            {/*Check if leftElement NOT undefined. If so, check if leftElement is a valid component. If so render leftElement as is. Else, render in Text.*/}
            {!!leftElement && 
                (React.isValidElement(leftElement) ? 
                <View style={[style.leftElementContainerStyle, leftElementContainerStyle]}>{leftElement}</View>
                : <Text style={[style.leftElementContainerStyle, leftElementContainerStyle]}>{leftElement}</Text>)
            }
            {!!headerTitle && 
                (React.isValidElement(headerTitle) ? 
                <View style={[style.headerTitleContainerStyle, headerTitleContainerStyle]}>{headerTitle}</View>
                : <Text style={[style.headerTitleContainerStyle, headerTitleContainerStyle]}>{headerTitle}</Text>)            
            }
            {!!rightElement && 
                (React.isValidElement(rightElement) ? 
                <View style={[style.rightElementContainerStyle, rightElementContainerStyle]}>{rightElement}</View>
                : <Text style={[style.rightElementContainerStyle, rightElementContainerStyle]}>{rightElement}</Text>)            
            }
        </View>
    );
};