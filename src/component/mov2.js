import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import Picker from 'react-native-picker';
// import StartDatePicker from './startDatePicker'
// import EndDatePicker from './endDatePicker'

class mov2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      syear: '',
      eyear: '',
      genres: '',
      filtergen1: [],
      contentis:[]


    }
  }

  componentWillMount() {
    this.props.getallgenres1();
    this.props.getcontent(this.state.syear,this.state.eyear,this.state.genres);
  }

  componentWillReceiveProps = (nextProps) => {
    //console.log("RECIECING", nextProps.filtergen1.genres)
    this.setState({ filtergen1: nextProps.filtergen1.genres })
    let data = [];
    nextProps.filtergen1.genres.map((item) => {
      data.push(item.name)
    })

    Picker.init({
      pickerData: data,
      onPickerConfirm: data => {

        this.setState({ genres: data })


      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }



  pickerShow() {


  }


  startdate() {
    let data2 = [];
    for (var i = 1990; i < 2018; i++) {
      data2.push(i);
    }

    Picker.init({
      pickerData: data2,
      onPickerConfirm: data2 => {
        this.setState({ syear: data2 })
      },
      onPickerCancel: data2 => {
        console.log(data2);
      },
      onPickerSelect: data2 => {
        console.log(data2);
      }
    });
    Picker.show();
  }


  enddate() {
    let data3 = [];
    for (var i = 1990; i < 2018; i++) {
      data3.push(i);
    }

    Picker.init({
      pickerData: data3,
      onPickerConfirm: data3 => {
        this.setState({ eyear: data3 })
      },
      onPickerCancel: data3 => {
        console.log(data3);
      },
      onPickerSelect: data => {
        console.log(data3);
      }
    });
    Picker.show();
  }

  render() {
    // this.pickerShow();
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1,  flexDirection: 'row', backgroundColor: '#323232' }}>
          <View style={{ flex: 0.2 }}>
            <Text style={{ fontWeight: 'bold', fontSize: totalSize(2.5), color: "white", alignSelf: 'center', marginTop: totalSize(1.5) }}>Filters</Text>
          </View>
          <View style={{ flex: 0.6,  }}></View>
          <View style={{ flex: 0.2 }}>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: 'white', fontSize: totalSize(2.5), marginTop: totalSize(1.5) }}>Apply</Text>
          </View>
        </View>

        <View style={{ flex: 0.05, backgroundColor: '#C0C0C0' }}>
          <Text style={{ marginLeft: totalSize(1), fontSize: totalSize(2), alignSelf: 'flex-start', marginTop: totalSize(1) }}>Year Range</Text>
        </View>

        <View style={{ flexDirection: 'row', flex: 0.1, margin: totalSize(1) }}>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity onPress={this.startdate.bind(this)} style={{ flex: 1 }}>
              <Text style={{ }}>From</Text>
              <Text style={{  }} >{this.state.syear}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.5 }}>
            <TouchableOpacity onPress={this.enddate.bind(this)} style={{ flex: 1, marginLeft: totalSize(2) }} style={{ flex: 1, marginLeft: totalSize(2) }}>
              <Text style={{  }}>To</Text>
              <Text style={{  }} >{this.state.eyear}</Text>
            </TouchableOpacity>
          </View>
        </View>
        
          <View  style={{ flex: 0.05, backgroundColor: '#C0C0C0'}}>
            <Text style={{ marginLeft: totalSize(1), fontSize: totalSize(2), alignSelf: 'flex-start', marginTop: totalSize(1) }}>Genres</Text>
          </View>

          <View style={{flex:0.7}}>
          <TouchableOpacity onPress={this.componentWillMount.bind(this)} style={{flex:0.2}}>
          <Text style={{ flex:0.5,margin:totalSize(1) }}>Select your Genres</Text>
          <Text style={{ fles:0.5,margin:totalSize(1) }}>{this.state.genres}</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  }
}


mapStateToProps = (state, props) => {

  return {
    filtergen1: state.filtergenReducer1.data,
    contentis: state.contentisReducer.data
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(mov2);