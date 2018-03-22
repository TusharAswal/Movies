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
import INFO from './TABS_DETAILS/INFO';
import CAST from './TABS_DETAILS/CAST';
import REVIEW from './TABS_DETAILS/REVIEW';

const imgPath = "https://image.tmdb.org/t/p/w500/";


 class MOVIE_DETAILS extends Component {
   constructor(props) {
       super(props);
       this.state={
           //isLoading:true,
           mdetails:[],
           otherdetails: []
       }
   }
    componentDidMount() {
   
       this.props.moviedetails(this.props.movie.id);
       this.props.runtime(this.props.movie.id);
      }

    componentWillReceiveProps=(nextProps)=>{
        console.log("other details",nextProps.otherdetails)
        console.log("other details22",nextProps.mdetails);
        if(this.props.mdetails!= nextProps.mdetails ){
            
            this.setState({mdetails:nextProps.mdetails,
            isLoading:nextProps.isLoading,
            })
        }

        if(this.props.otherdetails!= nextProps.otherdetails) {
            this.setState({otherdetails:nextProps.otherdetails
        })
    }
    }
    extractFilePath=(file)=>{
        let imgArray=[];
        let id=0;
        file.forEach(element => {
            if(id++<5)
                imgArray.push(element.file_path);
            
        });
        return imgArray;
    }

    render() {
        var slides=this.extractFilePath(this.props.mdetails);
        console.log("POSTERHERE",this.extractFilePath(this.props.mdetails));
        console.log("PTWRRR",slides[0]);
        return(
            <View  style={{flex:1,}}>
            
                <View style={{flex:0.5,borderWidth:1, }}>
                        <View style={{flex:0.7}}>
                                <Swiper style={{flex:1,}} showsButtons={false}>
                                    <View style={{flex:1}}>
                                        <Image source={{ uri: imgPath + slides[0] }} style={{alignSelf:'stretch',flex:1}}/>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Image source={{ uri: imgPath + slides[1] }} style={{alignSelf:'stretch',flex:1}}/>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Image source={{ uri: imgPath + slides[2] }} style={{alignSelf:'stretch',flex:1}}/>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Image source={{ uri: imgPath + slides[3] }} style={{alignSelf:'stretch',flex:1}}/>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Image source={{ uri: imgPath + slides[4] }} style={{alignSelf:'stretch',flex:1}}/>
                                    </View>
                                </Swiper>
                        </View>
                    
                    <View style={{flex:0.3,backgroundColor:'#696969'}}>
                       <View style={{marginLeft:width(30), marginTop:width(3)}}>
                        <View style={{flexDirection:'row'}}>  
                            <View style={{}}>
                                <Text style={{ color:'#C0C0C0',alignSelf:'center'}}>Audience <Icon name='circle'/> </Text>
                                
                            </View>
                            <View>
                                <Text style={{ color:'#C0C0C0'}}>{new Date(this.props.movie.release_date).getFullYear()} <Icon name='circle' /> </Text>
                            </View>
                            <View>
                                <Text style={{ color:'#C0C0C0'}}>{this.props.otherdetails} Minutes</Text>
                            </View>
                        </View>

                        <View>
                        <View>
                            <Text style={{ color:'white', fontWeight:'bold', fontSize:18}}>{this.props.movie.title}</Text>
                        </View>
                        <View>
                            <Text>Categ</Text>
                        </View>
                        </View>
                     </View>
                    </View>
                    <View style={{borderWidth:1,height:height(18),width:width(18),position:'absolute',marginTop:width(45),marginLeft:width(6)}}><Image style={{height:height(18),width:width(18)}} source={{uri: imgPath + this.props.movie.poster_path}}/></View>
                        <TouchableOpacity onPress={()=>Actions.popTo('Frontpage')} style={{flex:0.25,position:'absolute',alignSelf:'flex-start'}}>
                            <Icon name='arrow-left' size={height(4)} color='white' style={{marginLeft:width(2),marginTop:width(2)}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:0.25,position:'absolute',marginLeft:width(68)}}>
                            <Icon name='home' size={height(4)} color="white" style={{marginLeft:width(2),marginTop:width(2)}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:0.35,position:'absolute',marginLeft:width(80)}}>
                            <Icon name='share' size={height(4)} color='white' style={{marginLeft:width(2),marginTop:width(2)}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:0.25,position:'absolute',marginLeft:width(93)}}>
                            <Icon name='ellipsis-v' size={height(4)} color='white'  style={{marginLeft:width(2),marginTop:width(2)}} />
                        </TouchableOpacity> 
                </View> 
                <View style={{flex:0.5,borderWidth:1,backgroundColor:'black'}}>
                <ScrollableTabView style={{backgroundColor:'white'}}
                        tabBarBackgroundColor="#333435"
                        tabBarActiveTextColor="#fff"
                        tabBarInactiveTextColor="#BDC3C7"
                        tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                        tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                        renderTabBar={() => <ScrollableTabBar />}>
                        <INFO tabLabel= "INFO" label="Page #1"  />
                        <CAST tabLabel= "CAST" label="Page #2"  />
                        <REVIEW tabLabel="REVIEW" label="Page #3" />
                        
                    </ScrollableTabView>
                </View>
               
          </View>
        );
    }
   
}
 
    mapStateToProps = (state, props) => {
        
        return {
          mdetails: state.mdetailReducer.data,
          otherdetails: state.otherdetailReducer.data,
          isLoading: state.mdetailReducer.loading,
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
       
        text: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
        }
      })