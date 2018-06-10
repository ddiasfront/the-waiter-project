import React from 'react';
import * as firebase from 'firebase'
import {
  APIKEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINSENDERID
} from 'react-native-dotenv'

import HomeScreen from './src/components/screens/HomeScreen/index.js'

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
    return (
        <HomeScreen />
    );
  }
}