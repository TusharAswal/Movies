import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as myActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import Picker from 'react-native-picker';

class filtermovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      syear: '',
      eyear: '',
      genres: '',
      filtergen: [],
      selectedValue: '',


    }
  }

  componentDidMount() {
    this.props.getallgenres();
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("RECIECING", nextProps.filtergen.genres)
    this.setState({ filtergen: nextProps.filtergen.genres })
    let data = [];
    this.state.filtergen.map((item) => {
      data.push(item.name)
    })
    
    Picker.init({
        pickerData: data,
        onPickerConfirm: data => {
            console.log(data);
        },
        onPickerCancel: data => {
            console.log(data);
        },
        onPickerSelect: data => {
            console.log(data);
        }
    });
  }

  pickerShow(){
    
    Picker.show();
  }

  updateStartyear = (syear) => {
    this.setState({ syear: syear })
  }

  updateEndyear = (eyear) => {
    this.setState({ eyear: eyear })
  }

  updateGenres = (genres) => {
    this.setState({ genres: genres })
  }

  extractGenres = (one) => {
    let genresArray = [];
    let id = 0;
    one.forEach(element => {
      if (id++ < 18)
        genresArray.push(element.name);

    });
    return genresArray;
  }

  render() {

    var genslides = this.extractGenres(this.props.filtergen && this.props.filtergen.genres ? this.props.filtergen.genres : []);
    console.log(genslides, "fklhdskfhdskl");

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1, backgroundColor: '#323232', flexDirection: 'row' }}>
          <View style={{ flex: 0.3, justifyContent: 'center' }}><Text style={{ fontSize: totalSize(3), fontWeight: 'bold', color: 'white', marginLeft: totalSize(2) }}>Filters</Text></View>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 0.2, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {this.pickerShow()}}>
              <Text style={{ fontSize: totalSize(3), color: 'white' }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 0.05, backgroundColor: '#C0C0C0' }}><Text style={{ fontSize: totalSize(2.5), marginLeft: totalSize(2) }}>Year Range</Text></View>

        <View style={{ flex: 0.1, flexDirection: 'row' }}>
          <View style={{ flex: 0.5, marginLeft: totalSize(2) }}>
            <Picker selectedValue={this.state.syear} onValueChange={this.updateStartyear}>
              <Picker.Item label="2010" value="2010" />
              <Picker.Item label="2011" value="2011" />
              <Picker.Item label="2012" value="2012" />
            </Picker>
          </View>
          <View style={{ flex: 0.5, marginLeft: totalSize(2) }}>
            <Picker selectedValue={this.state.eyear} onValueChange={this.updateEndyear}>
              <Picker.Item label="2010" value="2010" />
              <Picker.Item label="2011" value="2011" />
              <Picker.Item label="2012" value="2012" />
            </Picker>
          </View>
          {/* <Text style={styles.text}>{this.state.eyear}</Text> */}
        </View>
        <View style={{ flex: 0.05, backgroundColor: '#C0C0C0' }}><Text style={{ fontSize: totalSize(2.5), marginLeft: totalSize(2) }}>Generes</Text></View>
        <View style-={{ flex: 0.7, marginLeft: totalSize(2) }}>

      
        </View>
      </View>
    )
  }
}


mapStateToProps = (state, props) => {
  //console.log("state : ", state);
  return {
    filtergen: state.filtergenReducer.data
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(filtermovies);