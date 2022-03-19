import React from 'react';
import { HeaderView } from './Header.view';
import {Icon} from '../../components/icon/Icon';
import {size, color} from '../../theme';

export const Header = () => {

    return(
        <HeaderView
            leftElement={<Icon iconSize={size.lg} iconName={"boxes"} iconColor={color.primary}/>} 
            headerTitle={'Title'}
            rightElement={<Icon iconSize={size.lg} iconName={"boxes"} iconColor={color.primary}/>} 
            headerTitleContainerStyle={{color: color.primary}}
        />
    );
};