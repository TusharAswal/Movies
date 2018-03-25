import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';

import Swiper from 'react-native-swiper';
import INFO from './PEOPLE_DETAILS_TAB/INFO';
import MOVIES from './PEOPLE_DETAILS_TAB/MOVIES';
import TVSHOWS from './PEOPLE_DETAILS_TAB/TVSHOWS';

const imgPath = "https://image.tmdb.org/t/p/w500/";


class PEOPLE_DETAIL extends Component {
    constructor(props) {
        super(props);
        this.state = {
        celebdetails:[],
        imge:[]
         
        }
    }
    componentDidMount() {
        
       this.props.getcelebdetails(this.props.id);
       this.props.getpersonalimg(this.props.id);
        
    }

    componentWillReceiveProps = (nextProps) => {
      console.log("RECEVING",this.props.imge)
      if(this.props.celebdetails!= nextProps.celebdetails) {
        this.setState({celebdetails:nextProps.celebdetails,imge:nextProps.imge})
          
     }
    }

    extractFilePath = (file) => {
        let imgArray = [];
        let id = 0;
        file.forEach(element => {
            if (id++ < 5)
                imgArray.push(element.file_path);

        });
        return imgArray;
    }
    render() {
        var slides = this.extractFilePath(this.props.imge);
        return (
            <View style={{ flex: 1, }}>

                <View style={{ flex: 0.5, }}>
                    <View style={{ flex: 0.7 }}>
                        <Swiper style={{ flex: 1, }} showsButtons={false}>
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: imgPath + slides[0] }} style={{ alignSelf: 'stretch', flex: 1 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: imgPath + slides[1] }} style={{ alignSelf: 'stretch', flex: 1 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: imgPath + slides[2] }} style={{ alignSelf: 'stretch', flex: 1 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: imgPath + slides[3] }} style={{ alignSelf: 'stretch', flex: 1 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: imgPath + slides[4] }} style={{ alignSelf: 'stretch', flex: 1 }} />
                            </View>
                        </Swiper>
                    </View>

                    <View style={{ flex: 0.3, backgroundColor: '#696969' }}>
                        <View style={{ marginLeft: width(30), marginTop: width(3) }}>

                            <View style={{height: height(3) }}>
                           <Text style={{fontSize:totalSize(2),fontWeight:'bold',marginLeft:totalSize(3)}}>{this.props.celebdetails.name}</Text>             
                                
                            </View>
                        </View>
                    </View>
                    <View style={{ height: height(18), width: width(18), position: 'absolute', marginTop: width(45), marginLeft: width(6) }}><Image style={{ height: height(18), width: width(18) }} /></View>
                    <TouchableOpacity onPress={() => Actions.popTo('Frontpage')} style={{ flex: 0.25, position: 'absolute', alignSelf: 'flex-start' }}>
                        <Icon name='arrow-left' size={height(4)} color='white' style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Actions.popTo('Frontpage')} style={{ flex: 0.25, position: 'absolute', marginLeft: width(68) }}>
                        <Icon name='home' size={height(4)} color="white" style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.35, position: 'absolute', marginLeft: width(80) }}>
                        <Icon name='share' size={height(4)} color='white' style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.25, position: 'absolute', marginLeft: width(93) }}>
                        <Icon name='ellipsis-v' size={height(4)} color='white' style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height:totalSize(18), width: totalSize(13), position: 'absolute', marginTop: width(45), marginLeft: width(6) }}><Image style={{ height: totalSize(18), width:totalSize(13) }} source={{ uri: imgPath + this.props.celebdetails.profile_path }} /></View>
                <View style={{ flex: 0.5, backgroundColor: 'black' }}>
                    <ScrollableTabView style={{ backgroundColor: 'white' }}
                        tabBarBackgroundColor="#333435"
                        tabBarActiveTextColor="#fff"
                        tabBarInactiveTextColor="#BDC3C7"
                        tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                        tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                        renderTabBar={() => <ScrollableTabBar />}>
                        <INFO tabLabel="INFO" label="Page #1" data={{info:this.props.id}} />
                        <MOVIES tabLabel="MOVIES" label="Page #2" data={{info:this.props.id}} />
                        <TVSHOWS tabLabel="TV SHOWS" label="Page #3" data={{info:this.props.id}}/>
                    </ScrollableTabView>
                </View>

            </View>
        );
    }

}

mapStateToProps = (state, props) => {
    return {
        celebdetails: state.getcelebdetailsReducer.data,
         imge: state.gethisimgReducer.data,
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PEOPLE_DETAIL);
