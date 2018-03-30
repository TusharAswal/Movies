import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button,ActivityIndicator, } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as myActions from '../actions/filterAction';
import { bindActionCreators } from 'redux';
import Picker from 'react-native-picker';


class startDatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startdate: 1990,
      enddate: 2018,
      genresis: '',
      gotagenres: [],
      genresidis: 28
    }
  }

  componentDidMount() {
    this.props.getcontent(this.state.startdate, this.state.enddate, this.state.genresidis);
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ gotagenres: nextProps.gotagenres })
  }
  startdate() {
    let data2 = [];
    for (var i = 1990; i < 2018; i++) {
      data2.push(i);
    }

    Picker.init({
      pickerData: data2,
      onPickerConfirm: data2 => {
        this.setState({ startdate: data2 })
      },
      onPickerCancel: data2 => {

      },
      onPickerSelect: data2 => {

      }
    });
    Picker.show();
  }

  enddate() {
    let data3 = [];
    for (var i = 1991; i < 2017; i++) {
      data3.push(i);
    }

    Picker.init({
      pickerData: data3,
      onPickerConfirm: data3 => {
        this.setState({ enddate: data3 })

      },
      onPickerCancel: data3 => {

      },
      onPickerSelect: data3 => {

      }
    });
    Picker.show();
  }

  genresis() {
    let data = [];
    let iddata = [];

    this.props.item.genres.map((item) => {
      data.push(item.name)
      iddata.push(item.id)
    })


    Picker.init({
      pickerData: data,
      onPickerConfirm: data => {
        this.setState({ genresis: data })
      },

      onPickerCancel: iddata => {
      },
      onPickerSelect: iddata => {
      }
    });
    Picker.show();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1, flexDirection: 'row', backgroundColor: '#323232' }}>
          <Text style={{ flex: 0.2, color: 'white', alignSelf: 'center', fontSize: totalSize(2.5), fontWeight: 'bold', marginLeft: totalSize(2) }}>Filters</Text>
          <View style={{ flex: 0.6 }} />
          <TouchableOpacity onPress={() => Actions.discover({ 'starting': this.state.startdate, 'ending': this.state.enddate, 'geniss': this.state.genresidis })} style={{ flex: 0.2, alignSelf: 'center' }}><Text style={{ fontSize: totalSize(2.5), fontWeight: 'bold', color: 'white' }}>Apply</Text></TouchableOpacity>
        </View>

        <View style={{ flex: 0.05, backgroundColor: '#C0C0C0' }}>
          <Text style={{ fontSize: totalSize(2), marginLeft: totalSize(2) }}>Your Range</Text>
        </View>

        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.startdate.bind(this)} style={{ flex: 0.5, margin: totalSize(2) }}>
            <Text style={{}}>From</Text>
            <Text style={{}}>{this.state.startdate}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.enddate.bind(this)} style={{ flex: 0.5, margin: totalSize(2) }}>
            <Text style={{}}>To</Text>
            <Text style={{}}>{this.state.enddate}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.05, backgroundColor: '#C0C0C0' }}>
          <Text style={{ fontSize: totalSize(2), marginLeft: totalSize(2) }}>Genres</Text>
        </View>

        <View style={{ flex: 0.7 }}>
          <TouchableOpacity onPress={this.genresis.bind(this)} style={{ flex: 0.2 }}>
            <Text style={{ flex: 0.5, marginLeft: totalSize(2), marginTop: totalSize(2) }}>Select your Genres</Text>
            <Text style={{ flex: 0.5, marginLeft: totalSize(2) }}>{this.state.genresis}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


mapStateToProps = (state, props) => {

  return {

    gotagenres: state.filterReducer.data15
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(startDatePicker);