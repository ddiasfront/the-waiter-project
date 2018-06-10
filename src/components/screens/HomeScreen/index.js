import React, { Component } from "react";
import HomeScreen from './HomeScreen.js'
import CodeScanner from '../CodeScanner'
import { createDrawerNavigator } from 'react-navigation-drawer';

const HomeScreenRouter = createDrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CodeScanner: { screen: CodeScanner }
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default HomeScreenRouter;