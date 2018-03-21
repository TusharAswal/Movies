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
import MOVIE_DETAILS from './component/MOVIE_DETAILS';
import Frontpage_Tv from './component/Frontpage_Tv';
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

            <Scene 
              key='MOVIE_DETAILS'
              component={MOVIE_DETAILS}
              hideNavBar={true}
            />

            <Scene 
              key='Frontpage_Tv'
              component={Frontpage_Tv}
              hideNavBar={true}
            />
        </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({

});

export default App;