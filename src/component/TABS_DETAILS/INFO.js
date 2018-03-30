import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity,ActivityIndicator, } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as myActions from '../../actions/movieAction';
const imgpath = "https://image.tmdb.org/t/p/w500/";
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import Image from 'react-native-image-progress';

class INFO extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ReBuRe: [],
            director: [],
            similarmov: [],
            generes: []
        }
    }

    componentDidMount() {
       
        this.props.gettingREBURE(this.props.data.info.id);
        this.props.gettingcrew(this.props.data.info.id);
        this.props.gettingsimilarMovies(this.props.data.info.id);
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.state.ReBuRe != nextProps.ReBuRe) {
            this.setState({ ReBuRe: nextProps.ReBuRe })
        }

        if (this.props.director != nextProps.director) {
            this.setState({ director: nextProps.director })
        }

        if (this.props.similarmov != nextProps.similarmov) {
            this.setState({ similarmov: nextProps.similarmov })
        }

    }


    render() {
        return (
             this.props.ReBuRe?
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.2, marginTop: 5, marginRight: 10, marginLeft: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 0.1666, alignItems: 'center' }}>
                        <Icon name='star' size={height(5)} style={{ color: '#B0E0E6' }} />
                        <Text style={{ fontSize: 10 }}>Rate</Text>
                    </View>
                    <View style={{ flex: 0.1666, alignItems: 'center' }}>
                        <Image indicator={ActivityIndicator} source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={{ height: height(5), width: width(9) }} />
                        <Text style={{ fontSize: 10 }}>{this.props.data.info.vote_average}</Text>
                    </View>
                    <View style={{ flex: 0.1666, alignItems: 'center' }}>
                        <Icon name='imdb' size={height(5)} style={{ color: '#B0E0E6' }} />
                        <Text style={{ fontSize: 10 }}>{this.props.data.info.vote_average}</Text>
                    </View>
                    <View style={{ flex: 0.1666, alignItems: 'center' }}>
                        <Image indicator={ActivityIndicator} source={{ uri: 'https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/Art/Rotten-Tomatoes-Certified-Fresh_2x.png' }} style={{ height: height(5), width: width(9) }} />
                        <Text style={{ fontSize: 10 }}>{this.props.data.info.vote_average}</Text>
                    </View>
                    <View style={{ flex: 0.1666, alignItems: 'center' }}>
                        <Image indicator={ActivityIndicator} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/movix-circular/128/popcorn_cinema_bucket_food_movie_entertainment-128.png' }} style={{ height: height(5), width: width(9) }} />
                        <Text style={{ fontSize: 10 }}>{this.props.data.info.vote_average}</Text>
                    </View>
                    <View style={{ flex: 0.1666, alignItems: 'center' }}></View>
                </View>
                <View style={{ marginTop: height(1), alignSelf: 'center', flex: 0.01, borderWidth: 0.5, borderColor: '#DCDCDC', marginTop: height(1), width: width(95) }}></View>
                <ScrollView style={{ flex: 0.89 }}>
                    <ScrollView style={{ flex: 0.4, marginLeft: width(3), marginRight: width(3) }}>
                        <Text style={{ fontSize: totalSize(1.5), marginTop: height(1) }}>{this.props.ReBuRe.overview}</Text>
                    </ScrollView>

                    <View style={{ flex: 0.6, marginLeft: width(3), marginRight: width(3), marginTop: height(3) }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Release Date: {this.props.ReBuRe.release_date}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>DVD Release Date: N/A</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Directed By: {this.props.director}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Revenue: {this.props.ReBuRe.revenue}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Budget: {this.props.ReBuRe.budget}</Text>
                    </View>

                    <View style={{ alignSelf: 'center', flex: 0.01, borderWidth: 0.5, borderColor: '#DCDCDC', marginTop: height(1), width: width(95) }}></View>
                    <Text style={{ fontSize: totalSize(2), marginLeft: width(3), color: 'black' }} >Similar Movies</Text>
                    <FlatList
                        horizontal={true}
                        keyExtractor={item => item.id.toString()}
                        key={`${item => item.id * 0.1.toString()}`}
                        data={this.props.cast}
                        numColumns={1}
                        data={this.props.similarmov}
                        renderItem={({ item }) =>
                            <View style={{ alignItems: 'center', flexWrap: 'wrap', marginLeft: width(3), marginRight: width(3), marginTop: height(2) }}>
                                <TouchableOpacity onPress={() => Actions.movie_details({ 'movie': item })}>
                                    <Image indicator={ActivityIndicator} source={{ uri: imgpath + item.poster_path }} style={{ width: width(25), height: height(25) }} />
                                    <Text numberOfLines={1} style={{ width: width(23) }} >{item.original_title}</Text>
                                    <Text numberOfLines={2} style={{ width: width(23) }} >{item.release_date}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
            : null 
        ); 
    }
    }


mapStateToProps = (state, props) => {
    return {
        ReBuRe: state.movieReducer.data9,
        director: state.movieReducer.data10,
        similarmov: state.movieReducer.data7,
    }
}
mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(INFO);