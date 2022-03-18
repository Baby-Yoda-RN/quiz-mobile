import React from 'react';
import { ButtonView } from './Button.view';

export const Button = ({title = 'Button', isDisabled = false, ...rest}) => {
    
    return <ButtonView title={title} isDisabled={isDisabled} />
}