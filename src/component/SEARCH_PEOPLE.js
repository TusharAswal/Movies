import { Actions, Router } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React, { Component } from 'react'
import { TextInput, Image, FlatList, ActivityIndicator, View, Text, Button, TouchableHighlight,TouchableOpacity } from 'react-native';
import DrawerLayoutAndroid from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';
import TabBar from "react-native-underline-tabbar";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import * as myActions from '../actions/actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideBarMenu from './SideBarMenu';
const imgpath = "https://image.tmdb.org/t/p/w500/";

class SEARCH_PEOPLE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            name: '',
            gotname: []

        }

    }

    componentWillUpdate = () => {
        console.log("POPULAR PEOPLE one",this.state.name)
        this.props.searchname(this.state.name);
    }

   

    componentWillReceiveProps = (nextProps) => {
       console.log("POPULAR PEOPLE",nextProps.gotname)
        if (this.props.gotname != nextProps.gotname) {
            this.setState({ gotname: nextProps.gotname })
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.1,flexDirection:'row', backgroundColor: '#323232'}}>
                    <View style={{ flex: 0.15, }}>
                        <TouchableOpacity onPress={() => Actions.popTo('POPULAR_PEOPLE')} style={{ flex: 0.25, position: 'absolute', alignSelf: 'flex-start' }}>
                            <Icon name='arrow-left' size={height(4)} color='white' style={{ marginLeft: width(2), marginTop: width(2) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 0.1 }}>
                        <Icon name='search' size={totalSize(3)} style={{ alignSelf: 'center',marginTop:height(1.5) }} color='white' />
                    </View>

                    <View style={{flex:0.75}}>
                        <TextInput style={{color:'white'}} placeholderTextColor="white"  placeholder="Search for People" onChangeText={(name) => this.setState({name})}/>
                    </View>
                </View>
                <FlatList
                    keyExtractor={item => item.id}
                    key={`${item => item.id * 0.1.toString()}`}
                    data={this.props.gotname}
                    numColumns={1}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <TouchableOpacity style={{ flex: 0.99, flexDirection: 'row', height: height(20), width: width(100), margin: height(2) }}>
                                <View style={{ flex: 0.35, justifyContent: 'center' }}><Image source={{ uri: imgpath + item.profile_path }} style={{ alignSelf: 'center', height: height(25), width: width(30) }} /></View>
                                <View style={{ flex: 0.65, justifyContent: 'center' }}><Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Name: {item.name}</Text></View>
                            </TouchableOpacity>
                            <View style={{ alignSelf: 'center', flex: 0.01, borderWidth: 1, borderColor: '#DCDCDC', margin: height(2), width: width(95) }}></View>
                        </View>
                    } />
            </View>

        );

    }
}

mapStateToProps = (state, props) => {
    return {
        gotname: state.gotnameReducer.data,

    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SEARCH_PEOPLE);