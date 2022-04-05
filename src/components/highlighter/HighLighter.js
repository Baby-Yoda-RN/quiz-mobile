import React from 'react';
import {Text, View} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {size, color} from '../../theme';

export const Highlighter = ({language = 'css', newCodeString, ...rest}) => {
  const oldCode = `
  position: absolute; 
  width: 319px;
  height: 429px;
  left: 28px;
  top: 159px; 

  background: #FFFFFF; 
  box-shadow: 0px 4px 4px
  rgba(206,206,206,0.16);  
  border-radius: 8px`;

  const codeString = newCodeString ? newCodeString : oldCode;
  return (
    <SyntaxHighlighter
      language="css"
      fontFamily="Poppins-Regular"
      customStyle={{borderRadius: size.sm, backgroundColor: color.white}}
      fontSize={size.rg}
      highlighter="hljs"
      {...rest}>
      {codeString}
    </SyntaxHighlighter>
  );
};
