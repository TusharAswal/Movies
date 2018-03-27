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
            startdate:0
        }
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
        console.log(data2);
      },
      onPickerSelect: data2 => {
        console.log(data2);
      }
    });
    Picker.show();
  }

   
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.startdate.bind(this)} style={{ flex: 1, marginLeft: totalSize(2) }}>
                    <Text style={{ borderWidth: 1 }}>To</Text>
                    <Text style={{ borderWidth: 1 }}>{this.state.startdate}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}