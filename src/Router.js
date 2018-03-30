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
import Frontpage from './containers/FRONTPAGE';
import MOVIE_DETAILS from './containers/MOVIE_DETAILS';
import Frontpage_Tv from './containers/FRONTPAGE_TV';
import TV_DETAILS from './containers/TV_DETAILS';
import DISCOVER from './containers/DISCOVER';
import POPULAR_PEOPLE from './containers/POPULAR_PEOPLE';
import SEARCHMOVIE from './containers/SEARCHMOVIE';
import SEARCHTV from './containers/SEARCHTV';
import SEARCH_PEOPLE from './containers/SEARCH_PEOPLE';
import PEOPLE_DETAIL from './containers/PEOPLE_DETAIL';
import mov2 from './containers/MOV2';

const App = () => {
  return (
    <Router >
      <Scene key='root'>
        <Scene
          initial
          key='frontpage'
          component={Frontpage}
          hideNavBar={true}
        />

        <Scene
          key='movie_details'
          component={MOVIE_DETAILS}
          hideNavBar={true}
        />

        <Scene
          key='frontpage_tv'
          component={Frontpage_Tv}
          hideNavBar={true}
        />

        <Scene
          key='tv_details'
          component={TV_DETAILS}
          hideNavBar={true}
        />

        <Scene
          key='discover'
          component={DISCOVER}
          hideNavBar={true}
        />

        <Scene
          key='popular_people'
          component={POPULAR_PEOPLE}
          hideNavBar={true}
        />

        <Scene
          key='searchmovie'
          component={SEARCHMOVIE}
          hideNavBar={true}
        />

        <Scene
          key='searchtv'
          component={SEARCHTV}
          hideNavBar={true}
        />

        <Scene
          key='search_people'
          component={SEARCH_PEOPLE}
          hideNavBar={true}
        />

        <Scene
          key='people_detail'
          component={PEOPLE_DETAIL}
          hideNavBar={true}
        />

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