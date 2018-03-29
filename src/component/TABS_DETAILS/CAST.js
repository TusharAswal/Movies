import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import { connect } from 'react-redux';
import * as myActions from '../../actions/actions';
import { bindActionCreators } from 'redux';
import Image from 'react-native-image-progress';
const imgpath = "https://image.tmdb.org/t/p/w500/";
import {
    Actions,

} from 'react-native-router-flux';

class CAST extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cast: []
        }
    }

    componentWillMount() {
        this.props.gettingcast(this.props.data.cast.id);
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.state.cast != nextProps.cast) {
            this.setState({ cast: nextProps.cast })
        }
    }


    render() {

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    key={`${item => item.id * 0.1.toString()}`}
                    data={this.props.cast}
                    numColumns={1}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => Actions.PEOPLE_DETAIL({ 'id': item.id })} style={{ flex: 0.99, flexDirection: 'row', height: height(15), width: width(100), marginTop: height(3) }}>
                                <View style={{ flex: 0.2, justifyContent: 'center' }}><Image indicator={ActivityIndicator} source={{ uri: imgpath + item.profile_path }} style={{ alignSelf: 'center', borderRadius: totalSize(100), height: height(12), width: width(17) }} /></View>
                                <View style={{ flex: 0.4, justifyContent: 'center' }}><Text style={{ fontSize: totalSize(1.7), color: 'black', marginLeft: totalSize(1) }}>Name: {item.name}</Text></View>
                                <View style={{ flex: 0.4, justifyContent: 'center' }}><Text style={{ fontStyle: 'italic', color: '#778899', fontSize: 12, color: 'black', marginLeft: totalSize(1) }}>As: {item.character}</Text></View>
                            </TouchableOpacity>
                            <View style={{ alignSelf: 'center', flex: 0.01, borderWidth: 1, borderColor: '#DCDCDC', marginTop: height(1), width: width(95) }}></View>
                        </View>
                    } />
            </View>

        );

    }
}

mapStateToProps = (state, props) => {
    return {
        cast: state.castReducer.data,

    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CAST);