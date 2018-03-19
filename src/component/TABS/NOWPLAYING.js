import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity  } from 'react-native';
import {height,width,totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import * as myActions from '../../actions/actions';
import { bindActionCreators } from 'redux';

const imgPath = "https://image.tmdb.org/t/p/w500/";

class NOWPLAYING extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

moviedetail(id) {

}

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          numColumns={3}
          data={this.state.dataSource}
          renderItem={({item}) => 
        <View style={{margin:10 ,flex:1,height:height(30),width:width(30)}}>
            <TouchableOpacity onPress={this.moviedetail(item.id)} style={{flex:1,height:height(30),width:width(30)}}>
                <View style={{flex:0.8}}>
                    <Image source={{ uri: imgPath + item.poster_path }} style={{ width:width(30), height:null,flex:1 }} />
                </View>

              <View style={{flex:0.2,backgroundColor:'#999999',flexDirection:'row'}}>
              <Text style={{flex:1,textAlign:'center'}}>{item.title}</Text>
              <Icon name='ellipsis-v' style={{marginRight:3,marginTop:4}} />
              </View>
          </TouchableOpacity>
        </View>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


mapStateToProps = (state, props) => {
  console.log("state : ", state);
  return {
        movies: state.movieReducer.data,
        loading: state.movieReducer.loading
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NOWPLAYING);