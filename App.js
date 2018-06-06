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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your appz</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
