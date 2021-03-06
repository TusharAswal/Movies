import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Image from 'react-native-image-progress';
import * as myActions from '../../actions/movieAction';
import { bindActionCreators } from 'redux';

const imgPath = "https://image.tmdb.org/t/p/w500/";

class Anticipated extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],

    }
  }

  componentDidMount() {
    this.props.nowPlaying();

  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.movies != nextProps.movies) {
      this.setState({ movie: nextProps.movies, isLoading: nextProps.isLoading })
    }
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
      this.props.movies?
      <View style={{ flex: 1, }}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          key={`${this.props.singleRow ? item => item.id.toString() : item => item.id * 0.1.toString()}`}

          numColumns={this.props.singleRow ? 3 : 1}
          data={this.props.movies}
          renderItem={({ item }) =>
            <View style={{ flex: 1, flexDirection: this.props.singleRow ? 'row' : 'column', margin: 6, justifyContent: 'center', }}>

              <TouchableOpacity onPress={() => Actions.movie_details({ 'movie': item })} style={{ flex: 1, flexDirection: this.props.singleRow ? 'column' : 'row', width: this.props.singleRow ? width(30) : width(70), height: height(30), }}>
                <View style={{ flex: this.singleRow ? 0.2 : 0.8 }}>
                  <Image indicator={ActivityIndicator} source={{ uri: imgPath + item.poster_path }} style={{ flex: 1, width: this.props.singleRow ? width(30) : width(30) }} />
                </View>

                {this.props.singleRow ?
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 0.2, alignContent: 'center', alignItems: 'center', backgroundColor: '#C0C0C0', width: width(30) }}>
                    <View style={{ flex: 0.8, flexWrap: 'wrap' }}>
                      <Text style={{ fontSize: 12, textAlign: 'left', textAlignVertical: 'top', color: '#000', marginLeft: totalSize(1) }} numberOfLines={2}>{item.title}</Text>
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
                      <Image indicator={ActivityIndicator} source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={{ height: 30, width: 30 }} />
                      <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#000' }}>  {item.vote_average}</Text>
                    </View>
                  </View>

                }

              </TouchableOpacity>

              <View style={{ borderWidth: this.props.singleRow ? 0 : 0.5, marginTop: this.props.singleRow ? 0 : 5, borderColor: '#A9A9A9' }}>
              </View>
            </View>}
          keyExtractor={(item, index) => index}
        />
      </View>:[]
    );
  }
}


mapStateToProps = (state, props) => {

  return {
    movies: state.movieReducer.moviedata,

    isLoading: state.movieReducer.loading
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Anticipated);