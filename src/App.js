import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './store/store/';

export default class App extends Component {
  render() {
    return (
          <MenuProvider>
              <Provider store={store}>
                  <Router />
                </Provider>
            </MenuProvider>
    );
  }
}
