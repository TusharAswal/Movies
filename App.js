import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Router from './src/Router';
import { Provider } from 'react-redux';
import store from './src/store/store/';
export default class App extends Component {
      render() {
            return (
                  <Provider store={store}>
                        <Router />
                  </Provider>
            )
      }
}