import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
// import {docco} from 'react-syntax-highlighter/styles/hljs';
// import jsx from 'react-native-syntax-highlighter/dist/esm/styles/prism/jsx';

export const Highlighter = newCodeString => {
  const oldCode = `
  position: absolute; 
  width: 319px;
  height: 429px;
  left: 28px;
  top: 159px; 

  background: #FFFFFF; 
  box-shadow: 0px 
  rgba(206,206,206,0.16);  
  border-radius: 8px`;

  SyntaxHighlighter.color = 'green';
  const codeString = newCodeString && oldCode;
  return (
    <SyntaxHighlighter
      language="javascript"
      color="green"
      highlighter={'prism' || 'hljs'}>
      {codeString}
    </SyntaxHighlighter>
  );
};
