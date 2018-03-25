import { Actions, Router } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React, { Component } from 'react'
import { Image, FlatList, ActivityIndicator, View, Text, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import DrawerLayoutAndroid from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';
import TabBar from "react-native-underline-tabbar";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import * as myActions from '../../actions/actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import SideBarMenu from './SideBarMenu';
const imgpath = "https://image.tmdb.org/t/p/w500/";

class MOVIES extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donemovies: []
        }

    }
    componentWillMount = () => {
        console.log("Iam get id", this.props.data.info)
        this.props.getworkinmovies(this.props.data.info)
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.donemovies != nextProps.donemovies) {
            this.setState({ donemovies: nextProps.donemovies })
        }
    }
    render() {
        return (
            <View style={{ flex: 1,}}>
                <Text style={{ fontWeight: 'bold', fontSize: totalSize(2.3), marginLeft: totalSize(2) }}>Acting</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    key={`${item => item.id * 0.1.toString()}`}
                    data={this.props.donemovies}
                    numColumns={1}
                    renderItem={({ item }) =>
                    <View>
                        <View style={{ flex: 0.99, flexDirection: 'row',margin:totalSize(1) }}>
                            <View style={{ flex: 0.35 }}>
                                <Image source={{ uri:imgpath + item.poster_path}} style={{ alignSelf: 'center', height: height(25), width: width(32) }} />
                            </View>
                            <View style={{ flex: 0.65,margin:totalSize(2)}}>
                                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.5}}><Text>{item.release_date}</Text></View>
                                    <View style={{ flex: 0.5}}><Text style={{fontStyle:'italic'}}>As:{item.character}</Text></View>
                                </View>

                                <View style={{ flex: 0.7, }}>
                                    <Text style={{fontSize:totalSize(2),fontWeight:'bold'}}>{item.original_title}</Text>
                                </View>

                                <View style={{ flex: 0.2 }}>
                                    <Text>ICON</Text>
                                    <Text>{item.vote_average}</Text>
                                </View>
                        
                            </View>
                            
                        </View>
                        <View style={{ flex: 0.01, borderWidth: 1, borderColor: '#DCDCDC',width:width(95) ,alignSelf:'center' }} ></View>
                        </View>
                        
                    } />
                
            </View>

        );
    }
}

mapStateToProps = (state, props) => {
    return {
        donemovies: state.donemoviesReducer.data,
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MOVIES);
