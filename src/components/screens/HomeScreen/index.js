import React, { Component } from "react";
import HomeScreen from './HomeScreen'
import CodeScanner from '../CodeScanner'
import MenuScreen from '../MenuScreen'
import { createDrawerNavigator } from 'react-navigation-drawer';


const HomeScreenRouter = createDrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CodeScanner: { screen: CodeScanner },
    MenuScreen: { screen: MenuScreen }
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default HomeScreenRouter;