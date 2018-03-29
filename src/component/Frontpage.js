
import { Actions, Router } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React, { Component } from 'react'
import { View, Text, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import DrawerLayoutAndroid from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';
import TabBar from "react-native-underline-tabbar";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import * as myActions from '../actions/actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SideBarMenu from './SideBarMenu';
import NOWPLAYING from './TABS/NOWPLAYING';
import TOPBOXOFFICE from './TABS/TOPBOXOFFICE';
import ANTICIPATED from './TABS/ANTICIPATED';
import IMDBTOP250 from './TABS/IMDBTOP250';
import NEWDVDS from './TABS/NEWDVDS';
import TOPRATED from './TABS/TOPRATED';
import TRENDING from './TABS/TRENDING';
import UPCOMING from './TABS/UPCOMING';
import UPCOMINGDVDS from './TABS/UPCOMINGDVDS';
import ONNETFLIX from './TABS/ONNETFLIX';

class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleRow: true
        }
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={width(60)}
                ref={(_drawer) => this.drawer = _drawer}
                drawerBackgroundColor="#323232"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <SideBarMenu />}>
                <View style={{ flex: 1, backgroundColor: '#323232' }}>
                    <View style={{ flex: 0.1, flexDirection: 'row', backgroundColor: '#323232' }}>
                        <View style={{ flex: 0.2, backgroundColor: '#323232', margin: 10, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.openDrawer()}>
                                <Icon name='bars' size={35} color='white' />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 0.5, backgroundColor: '#323232', margin: 10, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Cinematics</Text>
                        </View>

                        <View style={{ flex: 0.3, flexDirection: 'row', backgroundColor: '#323232', margin: 10 }}>
                            <View style={{ flex: 0.5, backgroundColor: '#323232', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => { this.setState({ singleRow: !this.state.singleRow }) }}>
                                    <Icon name={this.state.singleRow ? 'list-ul' : 'table'} size={30} color='white' />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 0.5, backgroundColor: '#323232', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => Actions.SEARCHMOVIE()} style={{}}>
                                    <Icon name='search' size={totalSize(3)} style={{ alignSelf: 'center' }} color='white' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <ScrollableTabView style={{ backgroundColor: 'white' }}
                        tabBarBackgroundColor="#333435"
                        tabBarActiveTextColor="#fff"
                        tabBarInactiveTextColor="#BDC3C7"
                        tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                        tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                        renderTabBar={() => <ScrollableTabBar />}>
                        <NOWPLAYING tabLabel="NOW PLAYING" label="Page #1" singleRow={this.state.singleRow} />
                        <TOPBOXOFFICE tabLabel="TOP BOX OFFICE" label="Page #2" singleRow={this.state.singleRow} />
                        <ANTICIPATED tabLabel="ANTICIPATED" label="Page #3" singleRow={this.state.singleRow} />
                        <IMDBTOP250 tabLabel="IMDB TOP 250" label="Page #4" singleRow={this.state.singleRow} />
                        <NEWDVDS tabLabel="NEW DVDS" label="Page #5" singleRow={this.state.singleRow} />
                        <ONNETFLIX tabLabel="ON NET FLIX" label="Page #6" singleRow={this.state.singleRow} />
                        <TRENDING tabLabel="TRENDING" label="Page #7" singleRow={this.state.singleRow} />
                        <UPCOMING tabLabel="UPCOMING" label="Page #8" singleRow={this.state.singleRow} />
                        <UPCOMINGDVDS tabLabel="UPCOMING DVDS" label="Page #9" singleRow={this.state.singleRow} />
                    </ScrollableTabView>

                </View>
            </DrawerLayoutAndroid>
        );
    }
}
mapStateToProps = (state, props) => {
    return {

    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);