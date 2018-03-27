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
import TV_DETAILS from './component/TV_DETAILS';
import DISCOVER from './component/Discover';
import POPULAR_PEOPLE from './component/POPULAR_PEOPLE';
import SEARCHMOVIE from './component/SEARCHMOVIE';
import SEARCHTV from './component/SEARCHTV';
import SEARCH_PEOPLE from './component/SEARCH_PEOPLE';
import PEOPLE_DETAIL from './component/PEOPLE_DETAIL';
//import MODAL from './component/MODAL';
//import filtermovies from './component/filtermovies';
import mov2 from './component/mov2';
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

            <Scene
            key='TV_DETAILS'
            component={TV_DETAILS}
            hideNavBar={true}
            />

            <Scene 
            key='DISCOVER'
            component={DISCOVER}
            hideNavBar={true}
            />

            <Scene 
            key='POPULAR_PEOPLE'
            component={POPULAR_PEOPLE}
            hideNavBar={true}
            />

            <Scene
            key='SEARCHMOVIE'
            component={SEARCHMOVIE}
            hideNavBar={true}
             />

             <Scene 
             key='SEARCHTV'
             component={SEARCHTV}
             hideNavBar={true}
             />

             <Scene 
             key='SEARCH_PEOPLE'
             component={SEARCH_PEOPLE}
             hideNavBar={true}
             />

            <Scene 
             key='PEOPLE_DETAIL'
             component={PEOPLE_DETAIL}
             hideNavBar={true}
             />

              {/* <Scene 
             key='filtermovies'
             component={filtermovies}
             hideNavBar={true}
             /> */}

               <Scene 
             key='mov2'
             component={mov2}
             hideNavBar={true}
             />

             
        </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({

});

export default App;