import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput ,Button} from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import Picker from 'react-native-picker';

class filtermovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      syear: '',
      eyear: '',
      genres: '',
      filtered: []


    }
  }

  componentDidMount() {
    this.props.getallgenres(this.state.syear, this.state.eyear, this.state.genres);
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.filtered != nextProps.filtered) {
      this.setState({ filtered: nextProps.filtered })
    }
  }

setting() {
  this.setState()
}


  // extractGenres = (one) => {
  //   let genresArray = [];
  //   let id = 0;
  //   one.forEach(element => {
  //     if (id++ < 18)
  //       genresArray.push(element.name);

  //   });
  //   return genresArray;
  // }

  render() {
    return (
     
          <View style={{flex:1}}>

          <View style={{ flex: 0.1, flexDirection: 'row' }}>
            <View style={{ flex: 0.5, marginLeft: totalSize(2), borderWidth: 1 }}>
              <Text>Start</Text>
              <TextInput placeholder='1990' />
            </View>
            <View style={{ flex: 0.5, marginLeft: totalSize(2), borderWidth: 1 }}>
              <Text>End</Text>
              <TextInput placeholder='2018' />
            </View>

          </View>
          <View style={{ flex: 0.05, backgroundColor: '#C0C0C0' }}><Text style={{ fontSize: totalSize(2.5), marginLeft: totalSize(2) }}>Generes</Text></View>
          <View style-={{ flex: 0.7, marginLeft: totalSize(2), borderWidth: 1 }}>
            <Text>Genres</Text>
            <TextInput placeholder='Genres' onChangeText={(genres) => this.setState({ genres })} />
          </View>
          <Button title="asdfsd" onPress={this.setting} />
        </View>
      
    );
  }
}


mapStateToProps = (state, props) => {
  //console.log("state : ", state);
  return {
    filtergen: state.filtergenReducer.data
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(filtermovies);