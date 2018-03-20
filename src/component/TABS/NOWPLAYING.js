import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import * as myActions from '../../actions/actions';
import { bindActionCreators } from 'redux';

const imgPath = "https://image.tmdb.org/t/p/w500/";

class NOWPLAYING extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

 

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    console.log("props: ", this.props);
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          keyExtractor={item => item.id}
          key={`${this.props.singleRow ? item => item.id.toString() : item => item.id * 0.1.toString()}`}

          numColumns={this.props.singleRow ? 3 : 1}
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={{ flex: 1, flexDirection: this.props.singleRow ? 'row' : 'column', margin: 6, justifyContent: 'center', }}>

              <TouchableOpacity  style={{ flex: 1,flexDirection: this.props.singleRow ? 'column' : 'row' , width:this.props.singleRow ? width(30):width(70),height:height(30),}}>
                <View style={{ flex: this.singleRow ? 0.2 : 0.8 }}>
                  <Image source={{ uri: imgPath + item.poster_path }} style={{ flex: 1,width:this.props.singleRow ? width(30):width(30) }} />
                </View>

                {this.props.singleRow ?
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 0.2, alignContent: 'center', alignItems: 'center' }}>
                  <View style={{ flex: 0.8, flexWrap: 'wrap' }}>
                        <Text style={{  fontSize: 12, textAlign: 'left', textAlignVertical: 'top', color: '#000' }} numberOfLines={2}> {item.title}</Text>
                  </View>
                  <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 5 }}>
                        <Icon name="ellipsis-v" size={20} color="#000" onPress={() => { alert(item) }} />
                  </View>
            </View>
                  :
            <View style={{  flexDirection: 'column',
            justifyContent: 'space-between',flex: 0.8, marginBottom:height*0.0015, marginLeft:width*0.02}}>
              <View style={{ flex: 0.8, flexWrap: 'wrap', flexDirection:'column' }}>
                <Text style={{fontSize: 12, textAlign: 'left', color: '#6C7A89' }} numberOfLines={2}>
                  {new Date(item.release_date).getFullYear() }
                </Text>
                <Text style={{ justifyContent:'flex-start',fontSize: 15, fontWeight: 'bold', color: '#000'}} numberOfLines={2}>{item.title}</Text>
               
                <Text style={{ fontFamily: "Times New Roman", fontSize: 12, textAlign: 'left', fontWeight: 'bold', color: '#6C7A89', marginTop:height(2) }} numberOfLines={2}>{item.genre_ids}</Text>
              </View>
                <View style={{ flex: 0.2,  flexDirection: 'row', marginBottom:height*0.015}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(NOWPLAYING);