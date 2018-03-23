import React, {Component} from 'react';
import {Text,View,Image,ScrollView,FlatList} from 'react-native';
import {height,width,totalSize} from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as myActions from '../../actions/actions';
const imgpath = "https://image.tmdb.org/t/p/w500/";
import { bindActionCreators } from 'redux';

export default class INFO extends Component {
    render() {
        return(
            <View>
                <Text>DUMMY</Text>
                </View>
        );
    }
}