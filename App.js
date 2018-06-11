import React from 'react';

import HomeScreen from './src/components/screens/HomeScreen'
import {getUser} from './src/api'



export default class App extends React.Component {
  render() {
    return (
        <HomeScreen/>
    );
  }
}