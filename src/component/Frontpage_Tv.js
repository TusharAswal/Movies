
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
import AIRING_TODAY from './TABS_TV/AIRING_TODAY';
import POPULAR from './TABS_TV/POPULAR';
import TOP_RATED from './TABS_TV/TOP_RATED';

 class Frontpage_Tv extends Component{
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
                                <TouchableOpacity onPress={()=> Actions.SEARCHTV()}>
                                    <Icon name='search' size={totalSize(3)} style={{ alignSelf: 'flex-end' }} color='white' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <ScrollableTabView style={{backgroundColor:'white'}}
                        tabBarBackgroundColor="#333435"
                        tabBarActiveTextColor="#fff"
                        tabBarInactiveTextColor="#BDC3C7"
                        tabBarTextStyle={{ fontSize: 12 }}
                        tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                        renderTabBar={() => <ScrollableTabBar />}>
                        <AIRING_TODAY tabLabel='AIRING TODAY' singleRow={this.state.singleRow}/>
                        <POPULAR tabLabel='POPULAR  ' singleRow={this.state.singleRow} />
                        <TOP_RATED tabLabel='TOP RATED' singleRow={this.state.singleRow} />
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

export default connect(mapStateToProps, mapDispatchToProps)( Frontpage_Tv );