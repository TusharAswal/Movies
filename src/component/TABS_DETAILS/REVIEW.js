import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as myActions from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Review extends Component {
      constructor(props) {
            super(props);

      }
      render() {
                return(
                    <View>
                    <Text>NO REVIEW FOUND</Text>
                    </View>
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