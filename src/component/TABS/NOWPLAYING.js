import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image  } from 'react-native';
import {height,width,totalSize } from 'react-native-dimension';
const imgPath = "https://image.tmdb.org/t/p/w500/";
export default class FetchExample extends React.Component {

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
                <View style={{flex:0.9}}>
                    <Image source={{ uri: imgPath + item.poster_path }} style={{ width:width(30), height:null,flex:1 }} />
                </View>

              <View style={{flex:0.1}}>
              <Text style={{flex:1}}>{item.title}</Text>
              </View>

        </View>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
