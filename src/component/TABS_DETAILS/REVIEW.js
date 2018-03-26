import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as myActions from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { totalSize } from 'react-native-dimension';
class Review extends Component {
      constructor(props) {
            super(props);

      }

      componentWillMount=()=>{
            console.log("THIS IS REview Part",this.props.data.cast)
      }
      render() {
                return(
                    <ScrollView style={{margin:totalSize(2)}}>
                    <Text style={{fontSize:totalSize(3),fontWeight:'bold'}}>{this.props.data.cast.title}</Text>
                    <Text style={{}}>{this.props.data.cast.overview}</Text>
                    </ScrollView>
                );
            }
      
}
mapStateToProps = (state, props) => {
      return {

      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);