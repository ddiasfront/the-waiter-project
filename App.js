import React from 'react';

import HomeScreen from './src/components/screens/HomeScreen'
import {login} from './src/api'

import {
  PASSWORD,
  EMAIL,
} from 'react-native-dotenv'


export default class App extends React.Component {
  render() {
    return (
        <HomeScreen/>
    );
  }
}