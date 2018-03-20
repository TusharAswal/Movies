import React ,{Component}from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import {Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
const imgPath = "https://image.tmdb.org/t/p/w500/";


 class MOVIE_DETAILS extends Component {
   
    componentDidMount() {
       
      }

    render() {
        console.log('sdads');
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{flex:0.1,borderWidth:1,flexDirection:'row',backgroundColor:'red'}}>
                    <View style={{flex:0.7,alignSelf:'center',flexDirection:'row'}}>
                         <Icon name='arrow-left' size={height(3)} color='green' style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>
                    <View style={{flex:0.1,alignSelf:'center',flexDirection:'row'}}>
                        <Icon name='home' size={height(3)} color="green" style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>
                    <View style={{flex:0.1,alignSelf:'center',flexDirection:'row'}}>
                    <Icon name='share' size={height(3)} color='green' style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>
                    <View style={{flex:0.1,alignSelf:'center',flexDirection:'row'}}>
                    <Icon name='ellipsis-v' size={height(3)} color='green'  style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>
                </View>
                <View style={{flex:0.9}}>
                    <View style={{flex:0.4,borderWidth:1}}>
                     <Image source={{ uri: imgPath + this.props.movie.poster_path }} style={{ width:width(100),height:height(100)}} />
                    </View>
                    <View style={{flex:0.5,borderWidth:1}}>
                    </View>
                </View>
            </View>
        );
    }

}
    mapStateToProps = (state, props) => {
        console.log("state : ", state);
        return {
          //movies: state.movieReducer.data
        }
      }
      
      mapDispatchToProps = (dispatch) => {
        return bindActionCreators(myActions, dispatch);
      }
      
      export default connect(mapStateToProps, mapDispatchToProps)(MOVIE_DETAILS);