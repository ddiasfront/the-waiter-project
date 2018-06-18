import React, { Component } from "react";
import HomeScreen from './HomeScreen'
import CodeScanner from '../CodeScanner'
import MenuScreen from '../MenuScreen'
import { createStackNavigator, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'native-base';

import * as colors from '../../../constants/styles.js'

HomeScreen.navigationOptions = {
  header: null,
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon style={{color: tintColor}} name='home' />
  ),
}

CodeScanner.navigationOptions = {
  header: null,
  drawerLabel: 'Scan Code',
  drawerIcon: ({ tintColor }) => (
    <Icon style={{color: tintColor}} name='ios-qr-scanner' />
  ),
}

MenuScreen.navigationOptions = {
  header: null,
  drawerLabel: 'Menu Items',
  drawerIcon: ({ tintColor }) => (
    <Icon style={{color: tintColor}} name='list' />
  ),
}

const HomeScreenRouter = createDrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CodeScanner: { screen: CodeScanner },
    MenuScreen: { screen: MenuScreen }
  },
  {
    contentOptions: {
      activeTintColor: `${colors.textColors.grey}`,
      activeBackgroundColor: `${colors.textColors.red}`
    },
  }
);

export default HomeScreenRouter;