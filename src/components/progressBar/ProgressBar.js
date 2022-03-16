import React from 'react';
export const ProgressBar = ({newValue, newMax}) => {
  return <progress value={newValue} max={newMax} />;
};
