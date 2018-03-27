
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import Picker from 'react-native-picker';


export default class startDatePicker extends Component {
  constructor(props){
      super(props);
      this.state={
          enddate:0
      }
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
        console.log('conform',this.state.enddatw);
      },
      onPickerCancel: data3 => {
        console.log("cancel",data3);
      },
      onPickerSelect: data3 => {
        console.log('select',data3);
      }
    });
    Picker.show();
  }
    
    render() {
        return (
            <View style={{ flex:1}}>
                <TouchableOpacity onPress={this.enddate.bind(this)} style={{ flex: 1, marginLeft: totalSize(2) }} style={{ flex: 1, marginLeft: totalSize(2) }}>
                    <Text style={{ borderWidth: 1 }}>From</Text>
                    <Text style={{ borderWidth: 1 }}>{this.state.enddate}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}