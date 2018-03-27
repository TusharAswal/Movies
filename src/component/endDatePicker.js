
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import Picker from 'react-native-picker';


export default class startDatePicker extends Component {
  
   
    
    render() {
        return (
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity onPress={this.enddate.bind(this)} style={{ flex: 1, marginLeft: totalSize(2) }} style={{ flex: 1, marginLeft: totalSize(2) }}>
                    <Text style={{ borderWidth: 1 }}>Press Here22</Text>
                </TouchableOpacity>
            </View>
        );
    }
}