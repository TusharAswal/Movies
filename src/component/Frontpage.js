
import { Actions, Router} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React ,{Component} from 'react'
import { View,Text,Button, TouchableHighlight,TouchableOpacity} from 'react-native';
import DrawerLayoutAndroid from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';
import TabBar from "react-native-underline-tabbar";
import ScrollableTabView from 'react-native-scrollable-tab-view';
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
        this.state={
            singleRow:true
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
              drawerBackgroundColor= "#323232"
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => <SideBarMenu />}>               
              <View style={{flex: 1,backgroundColor:'#323232'}}>     
                <View style={{flex:0.1,flexDirection:'row' ,backgroundColor:'#323232'}}>
                <View style={{flex:0.2,backgroundColor:'#323232',margin:10,justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>this.openDrawer()}>
                     <Icon name='bars' size={35} color='white'/> 
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.5,backgroundColor:'#323232',margin:10,justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Cinematics</Text>
                </View>

                <View style={{flex:0.3,flexDirection:'row',backgroundColor:'#323232',margin:10}}>
                    <View style={{flex:0.5,backgroundColor:'#323232' ,justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => { this.setState({ singleRow: !this.state.singleRow }) }}>
                             <Icon name={this.state.singleRow ? 'list-ul' : 'table'} size={30} color='white'/>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.5,backgroundColor:'#323232',margin:10,justifyContent:'center'}}>
                        <TouchableOpacity >
                            <Icon name='search' size={17} style={{alignSelf:'flex-end'}} color='white'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
                <ScrollableTabView
                tabBarActiveTextColor="white"
                renderTabBar={() => <TabBar underlineColor="green"  
                tabBarStyle={{ backgroundColor: "#323232"}}
                tabBarTextStyle={{fontSize:15}}
                />} style={{flex:0.9,backgroundColor: "#323232"}}>
                <NOWPLAYING tabLabel={{label: "NOW PLAYING"}} label="Page #1" singleRow={this.state.singleRow}/>
                <TOPBOXOFFICE tabLabel={{label: "TOP BOX OFFICE"}} label="Page #2"/>
                <ANTICIPATED tabLabel={{label: "ANTICIPATED"}} label="Page #3"/>
                <IMDBTOP250 tabLabel={{label: "IMDB TOP 250"}} label="Page #4"/>
                <NEWDVDS tabLabel={{label: "NEW DVDS"}} label="Page #5"/>
                <ONNETFLIX tabLabel={{label: "ON NET FLIX"}} label="Page #6"/>
                <TRENDING tabLabel={{label: "TRENDING"}} label="Page #7"/>
                <UPCOMING tabLabel={{label: "UPCOMING"}} label="Page #8"/>
                <UPCOMINGDVDS tabLabel={{label: "UPCOMING DVDS"}} label="Page #9"/>
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