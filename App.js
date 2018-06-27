import React from 'react';

import HomeScreen from './src/components/screens/HomeScreen'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'

let store = createStore(allReducers)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen/>
      </Provider>
    );
  }
}