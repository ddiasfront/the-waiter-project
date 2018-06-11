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

import HomeScreen from './src/components/screens/HomeScreen'

export default class App extends React.Component {
  state = {
    tables: null
  };
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
        <HomeScreen tables={this.state.tables ? this.state.tables : null}/>
    );
  }
}