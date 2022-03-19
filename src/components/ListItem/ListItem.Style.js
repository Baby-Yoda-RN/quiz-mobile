import React from 'react';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e5e5',
    borderWidth: 2,
    borderRadius: 8,
    height: 70,
  },

  AlignmentContainer: {
    flex: 0,
    flexDirection: 'row',
  },

  AlignmentContainerText: {
    flex: 1,
  },

  FontStyleSizeTitle: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    paddingTop: 11,
    paddingLeft: 18,
    fontSize: 18,
    color: '#1E4D58',
  },

  FontStyleSubTitle: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    paddingTop: 5,
    paddingLeft: 18,
    fontSize: 12,
    color: '#1E4D58',
  },

  IconStyle: {
    paddingRight: 29.79,
    paddingTop: 24,
  },
});
