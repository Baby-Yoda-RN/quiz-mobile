import React from 'react';
import { HeaderView } from './Header.view';

export const Header = ({leftIcon = <></>, rightIcon = <></>, title, ...rest}) => {
 
    return <HeaderView 
            leftIcon={leftIcon} // Any RN component
            rightIcon={rightIcon} // Any RN component
            title={title}  // Any RN component or string
            {...rest}
            />;
}