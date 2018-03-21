import React ,{Component}from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import {Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import Swiper from 'react-native-swiper';
const imgPath = "https://image.tmdb.org/t/p/w500/";


 class MOVIE_DETAILS extends Component {
   
    componentDidMount() {
       
      }

    render() {
        console.log('sdads');
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
            
                <View style={{flex:0.4,borderWidth:1 }}>
                    <View style={{flex:0.6,borderWidth:5,borderColor:'red'}}>
                            <Swiper style={{flex:1,}} showsButtons={false}>
                                <View style={styles.slide1}>
                                    <Text style={styles.text}>Hello Swiper</Text>
                                </View>
                                <View style={styles.slide2}>
                                    <Text style={styles.text}>Beautiful</Text>
                                </View>
                                <View style={styles.slide3}>
                                    <Text style={styles.text}>And simple</Text>
                                </View>
                            </Swiper>
                    </View>
               
                    
                     <View style={{flex:0.1,position:'absolute',alignSelf:'flex-start'}}>
                         <Icon name='arrow-left' size={height(3)} color='white' style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>
                    <View style={{flex:0.1,position:'absolute',marginLeft:width(72)}}>
                        <Icon name='home' size={height(3)} color="white" style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>
                    <View style={{flex:0.1,position:'absolute',marginLeft:width(82)}}>
                        <Icon name='share' size={height(3)} color='white' style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>
                    <View style={{flex:0.1,position:'absolute',marginLeft:width(92)}}>
                        <Icon name='ellipsis-v' size={height(3)} color='white'  style={{marginLeft:width(2),marginTop:width(2)}} />
                    </View>   
                </View>
                
                <View style={{borderWidth:1,flex:0.2,height:height(18),width:width(18),position:'absolute',marginTop:width(35),marginLeft:width(6)}}></View>
                <View style={{borderWidth:1,flex:0.4}}>
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

      const styles = StyleSheet.create({
        wrapper: {
            flex:1
        },
        slide1: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9DD6EB',
        },
        slide2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#97CAE5',
        },
        slide3: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92BBD9',
        },
        text: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
        }
      })