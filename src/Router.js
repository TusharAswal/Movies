import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  
} from 'react-native-router-flux';
import Frontpage from './component/Frontpage';

const App = () => {
  return(
    <Router >
        <Scene key='root'>
            <Scene
              initial
              key='Frontpage'
              component={Frontpage}
              hideNavBar={true}
               />
        </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({

});

export default App;