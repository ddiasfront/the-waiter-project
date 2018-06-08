import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import {
  APIKEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINSENDERID
} from 'react-native-dotenv'

import { createStackNavigator } from 'react-navigation'
import {FindTable, Welcome} from './src/components/screens'

const RootStack = createStackNavigator(
  {
    FindTable: { screen: FindTable },
    Welcome: { screen: Welcome }
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: APIKEY,
        authDomain: AUTHDOMAIN,
        databaseURL: DATABASEURL,
        projectId: PROJECTID,
        storageBucket: STORAGEBUCKET,
        messagingSenderId: MESSAGINSENDERID
    });
  }
  render() {
    return <RootStack />;
  }
}