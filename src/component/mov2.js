import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput, Button,ActivityIndicator, } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import Picker from 'react-native-picker';
import StartDatePicker from './startDatePicker'

class mov2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtergen1: [],
      filtergenid: []
    }
  }

  componentWillMount() {

    this.props.getallgenres1();

  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ filtergen1: nextProps.filtergen1.genres, filtergenid: nextProps.filtergen1.genres })

  }

  extractidPath = (file) => {
    let idArray = [];
    let id = 0;
    file.forEach(element => {
      if (id++ < 20)
        idArray.push(element.id);

    });
    return idArray;
  }

  render() {
    var ids = this.props.filtergen1 && this.props.filtergen1.genres ? this.extractidPath(this.props.filtergen1.genres) : [];

    return (
      <View style={{ flex: 1 }}>
        <StartDatePicker item={this.props.filtergen1} item2={ids} />
      </View>
    );
  }
}


mapStateToProps = (state, props) => {

  return {
    filtergen1: state.filtergenReducer1.data,
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(mov2);