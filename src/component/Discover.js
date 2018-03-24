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
const imgPath = "https://image.tmdb.org/t/p/w500/";

class DISCOVER extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: [],
            singleRow: true
        }
        this.openDrawer = this.openDrawer.bind(this);
    }

    componentDidMount() {
        this.props.nowPlaying();

    }


    componentWillReceiveProps = (nextProps) => {
        //console.log("Video: ", nextProps.movies.video);
        if (this.props.movies != nextProps.movies) {
            this.setState({ movie: nextProps.movies, isLoading: nextProps.isLoading })
        }
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
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

                        <View style={{ flex: 0.4, backgroundColor: '#323232', margin: 10, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Discover</Text>
                        </View>

                        <View style={{ flex: 0.4, flexDirection: 'row', backgroundColor: '#323232', margin: 10 }}>

                            <View style={{ flex: 0.333, backgroundColor: '#323232', justifyContent: 'center' }}>
                                <TouchableOpacity >
                                    <Icon name='filter' size={totalSize(3)} style={{ alignSelf: 'center' }} color='white' />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 0.333, backgroundColor: '#323232', justifyContent: 'center' }}>
                                <TouchableOpacity >
                                    <Icon name='sort' size={totalSize(3)} style={{ alignSelf: 'center' }} color='white' />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 0.333, backgroundColor: '#323232', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => { this.setState({ singleRow: !this.state.singleRow }) }}>
                                    <Icon name={this.state.singleRow ? 'list-ul' : 'table'} size={totalSize(3)} color='white' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 0.9 }}>
                        <FlatList style={{ backgroundColor: 'white' }}
                            keyExtractor={item => item.id}
                            key={`${this.props.singleRow ? item => item.id.toString() : item => item.id * 0.1.toString()}`}

                            numColumns={this.props.singleRow ? 3 : 1}
                            data={this.props.movies}
                            renderItem={({ item }) =>
                                <View style={{ flex: 1, flexDirection: this.props.singleRow ? 'row' : 'column', margin: 6, justifyContent: 'center', }}>

                                    <TouchableOpacity onPress={() => Actions.MOVIE_DETAILS({ 'movie': item })} style={{ flex: 1, flexDirection: this.props.singleRow ? 'column' : 'row', width: this.props.singleRow ? width(30) : width(70), height: height(30), }}>
                                        <View style={{ flex: this.singleRow ? 0.2 : 0.8 }}>
                                            <Image source={{ uri: imgPath + item.poster_path }} style={{ flex: 1, width: this.props.singleRow ? width(30) : width(30) }} />
                                        </View>

                                        {this.props.singleRow ?
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 0.2, alignContent: 'center', alignItems: 'center', backgroundColor: '#C0C0C0' }}>
                                                <View style={{ flex: 0.8, flexWrap: 'wrap' }}>
                                                    <Text style={{ fontSize: 12, textAlign: 'left', textAlignVertical: 'top', color: '#000' }} numberOfLines={2}> {item.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 5 }}>
                                                    <Icon name="ellipsis-v" size={20} color="#000" onPress={() => { alert(item) }} />
                                                </View>
                                            </View>
                                            :
                                            <View style={{
                                                flexDirection: 'column',
                                                justifyContent: 'space-between', flex: 0.8, marginBottom: height * 0.0015, marginLeft: width * 0.02
                                            }}>
                                                <View style={{ flex: 0.8, flexWrap: 'wrap', flexDirection: 'column' }}>
                                                    <Text style={{ fontSize: 12, textAlign: 'left', color: '#6C7A89' }} numberOfLines={2}>
                                                        {new Date(item.release_date).getFullYear()}
                                                    </Text>
                                                    <Text style={{ justifyContent: 'flex-start', fontSize: 15, fontWeight: 'bold', color: '#000' }} numberOfLines={2}>{item.title}</Text>

                                                    <Text style={{ fontFamily: "Times New Roman", fontSize: 12, textAlign: 'left', fontWeight: 'bold', color: '#6C7A89', marginTop: height(2) }} numberOfLines={2}>{item.genre_ids}</Text>
                                                </View>
                                                <View style={{ flex: 0.2, flexDirection: 'row', marginBottom: height * 0.015 }}>
                                                    <Image source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={{ height: 30, width: 30 }} />
                                                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#000' }}>  {item.vote_average}</Text>
                                                </View>
                                            </View>

                                        }

                                    </TouchableOpacity>

                                    <View style={{ borderWidth: this.props.singleRow ? 0 : 0.2, marginTop: this.props.singleRow ? 0 : 5, borderColor: 'grey' }}>
                                    </View>
                                </View>}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                </View>
            </DrawerLayoutAndroid>

        );
    }
}

mapStateToProps = (state, props) => {
    //console.log("state : ", state);
    return {
        movies: state.movieReducer.data,
        isLoading: state.movieReducer.loading
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DISCOVER);