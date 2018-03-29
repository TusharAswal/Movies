import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Router from './src/Router';
import { Provider } from 'react-redux';
import store from './src/store/store/';
import { MenuProvider } from 'react-native-popup-menu';
export default class App extends Component {
      render() {
            return (
                  <MenuProvider>
                        <Provider store={store}>
                              <Router />
                        </Provider>
                  </MenuProvider>
            )
      }
}