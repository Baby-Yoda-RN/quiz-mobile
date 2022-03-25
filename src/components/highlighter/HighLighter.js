import React from 'react';
import {Text} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import reactSyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import jsx from 'react-native-syntax-highlighter/dist/esm/styles/prism/jsx';
import {size, color} from '../../theme';

export const Highlighter = (language = 'css', newCodeString) => {
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
  // console.log(Prism);

  const codeString = newCodeString && oldCode;
  return (
    // <Text>Hello</Text>
    <reactSyntaxHighlighter
      language="css"
      fontSize={size.rg + size.xs}
      highlighter={docco}>
      {codeString}
    </reactSyntaxHighlighter>
  );
};
