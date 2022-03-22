import React from 'react';
import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: size.sm,
    flex: 0,
    flexDirection: 'row',
  },

  TestContainer: {
    flex: 1,
  },

  Title: {
    fontFamily: 'Poppins',
    paddingTop: 11,
    paddingLeft: 18,
    fontSize: size.rg,
    color: color.darkGreen,
  },

  SubTitle: {
    fontFamily: 'Poppins',
    paddingTop: 5,
    paddingLeft: 18,
    fontSize: size.rg,
    color: color.darkGreen,
  },

  IconStyle: {
    paddingRight: 29.79,
    paddingTop: 24,
  },
});
