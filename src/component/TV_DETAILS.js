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
import INFO from './TABS_TV_DETAILS/INFO';
import ACTORS from './TABS_TV_DETAILS/ACTORS';
import SEASONS from './TABS_TV_DETAILS/SEASONS';

const imgPath = "https://image.tmdb.org/t/p/w500/";


class TV_DETAILS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvdetails: [],
            tvimg:[],
            tvruntime:[]
           
        }
    }
    componentDidMount() {
        //console.log("AIRING AGE",this.props.tv)
        this.props.tvdetail(this.props.tv.id);
        this.props.tvimages(this.props.tv.id);
        this.props.runtimetv(this.props.tv.id);
    }

    componentWillReceiveProps = (nextProps) => {
        
        if (this.props.tvdetails != nextProps.tvdetails) {

            this.setState({
                tvdetails: nextProps.tvdetails,
                isLoading: nextProps.isLoading,
            })
        }

        if (this.props.tvimg != nextProps.tvimg) {

            this.setState({
                tvimg: nextProps.tvimg,
                
            })
        }

        
        if (this.props.tvruntime != nextProps.tvruntime) {

            this.setState({
                tvruntime: nextProps.tvruntime,
                
            })
        }
    }

    extractImPath = (file) => {
        let imgArray = [];
        let id = 0;
        file.forEach(element => {
            if (id++ < 5)
                imgArray.push(element.file_path);

        });
        return imgArray;
    }


    render() {
        var slides = this.extractImPath(this.props.tvimg);
        console.log("TV PICS",this.props.tv.episode_run_time)
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
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={{ color: '#C0C0C0', alignSelf: 'center' }}>Audience <Icon name='circle' /> </Text>

                                </View>
                                <View>
                                    <Text style={{ color: '#C0C0C0' }}>{new Date(this.props.tv.first_air_date).getFullYear()} <Icon name='circle' /> </Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#C0C0C0' }}>{this.props.tvruntime} Minutes</Text>
                                </View>
                            </View>

                            <View>
                                <View>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{this.props.tv.original_name}</Text>
                                </View>
                                <View style={{height: height(3) }}>
                                        <FlatList
                                        horizontal={true}
                                        keyExtractor={item => item.id}
                                        key={`${item => item.id * 0.1.toString()}`}
                                        numColumns={1}
                                        data={this.props.tvdetails}
                                        renderItem={({ item }) => {
                                            console.log("item ",item);  
                                            return (
                                                <View style={{ }}>
                                                    <Text style={{fontSize:12}}>{item.name},</Text>
                                                </View>
                                            )
                                        }

                                        } />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: height(18), width: width(18), position: 'absolute', marginTop: width(45), marginLeft: width(6) }}><Image style={{ height: height(18), width: width(18) }} source={{ uri: imgPath + this.props.tv.backdrop_path }} /></View>
                    <TouchableOpacity onPress={() => Actions.popTo('Frontpage_Tv')} style={{ flex: 0.25, position: 'absolute', alignSelf: 'flex-start' }}>
                        <Icon name='arrow-left' size={height(4)} color='white' style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Actions.popTo('Frontpage_Tv')} style={{ flex: 0.25, position: 'absolute', marginLeft: width(68) }}>
                        <Icon name='home' size={height(4)} color="white" style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.35, position: 'absolute', marginLeft: width(80) }}>
                        <Icon name='share' size={height(4)} color='white' style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.25, position: 'absolute', marginLeft: width(93) }}>
                        <Icon name='ellipsis-v' size={height(4)} color='white' style={{ marginLeft: width(2), marginTop: width(2) }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5, backgroundColor: 'black' }}>
                    <ScrollableTabView style={{ backgroundColor: 'white' }}
                        tabBarBackgroundColor="#333435"
                        tabBarActiveTextColor="#fff"
                        tabBarInactiveTextColor="#BDC3C7"
                        tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                        tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                        renderTabBar={() => <ScrollableTabBar />}>
                        <INFO tabLabel="INFO" label="Page #1" data={{ info: this.props.tv.id}} />
                        <ACTORS tabLabel="ACTORS" label="Page #2" data={{ info: this.props.tv.id }} />
                        <SEASONS tabLabel="SEASONS" label="Page #3" data={{ info: this.props.tv.id }}/>

                    </ScrollableTabView>
                </View>

            </View>
        );
    }

}

mapStateToProps = (state, props) => {

    return {
        tvdetails: state.tvdetailReducer.data,
        isLoading: state.tvdetailReducer.loading,
        tvimg: state.tvimageReducer.data,
        tvruntime: state.tvruntimeReducer.data,
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TV_DETAILS);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})