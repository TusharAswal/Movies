import { Actions, Router } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React, { Component } from 'react'
import { Image, FlatList, ActivityIndicator, View, Text, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
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

class POPULAR_PEOPLE extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
         popularPeople: [],
          
        }
        this.openDrawer = this.openDrawer.bind(this);
      }
        
    

    componentWillMount=()=> {
        this.props.getpopularPeople();
    }

    componentWillReceiveProps=(nextProps)=>{
        //console.log("POPULAR PEOPLE ID: ", nextProps.popularPeople.id);
         if(this.props.popularPeople!=nextProps.popularPeople ){
           this.setState({popularPeople:nextProps.popularPeople})
         }
       }
    
    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        return(
            <DrawerLayoutAndroid
                drawerWidth={width(60)}
                ref={(_drawer) => this.drawer = _drawer}
                drawerBackgroundColor="#323232"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <SideBarMenu />}>
            <View style={{ flex:1}}>
                <View style={{flex:0.1,backgroundColor: '#323232',flexDirection:'row'}}>
                    <View style={{flex:0.2}}>
                        <TouchableOpacity onPress={() => this.openDrawer()}>
                            <Icon name='bars' size={35} color='white' style={{margin:height(2)}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.6}}><Text style= {{ fontWeight: 'bold', fontSize: 20, color: 'white',margin:totalSize(2)}}>Popular People</Text></View>
                    <View style={{flex:0.2}}>
                        <TouchableOpacity onPress={()=>Actions.SEARCH_PEOPLE()}>
                            <Icon name='search' size={totalSize(3)} style={{ alignSelf:'flex-end',margin:totalSize(2) }} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex:0.9}}>
                <FlatList 
                keyExtractor={item=> item.id.toString()}
                key={`${item => item.id*0.1.toString()}`}
                data={this.props.popularPeople}
                numColumns={1}
                renderItem={({item}) => 
                <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>Actions.PEOPLE_DETAIL({'id':item.id})} style={{flex:0.99,flexDirection:'row',  height: height(20), width: width(100), margin: height(2)}}>
                    <View style={{flex:0.3,justifyContent:'center'}}><Image source={{ uri: imgpath + item.profile_path }} style={{alignSelf:'center',alignSelf: 'center', height: height(17), width: width(30),borderRadius:100}} /></View>
                    <View style={{flex:0.7,justifyContent:'center'}}><Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold',margin:totalSize(2)}}>Name: {item.name}</Text></View>
                </TouchableOpacity>
                <View style={{alignSelf:'center',flex:0.01,borderColor:'#DCDCDC',marginTop:height(1),width:width(95)}}></View>
                <View style={{ flex: 0.01, borderWidth: 1, borderColor: '#DCDCDC',width:width(95) ,alignSelf:'center' }} ></View>
                </View>                
            } />
                </View>
                    
            </View>
            </DrawerLayoutAndroid>
        );
    }

}

mapStateToProps=(state, props) => {
    return{
        popularPeople: state.popularpeepsReducer.data,

    }
} 

mapDispatchToProps=(dispatch) => {
    return bindActionCreators(myActions,dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(POPULAR_PEOPLE);