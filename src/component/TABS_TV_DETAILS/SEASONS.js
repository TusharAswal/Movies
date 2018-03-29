import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as myActions from '../../actions/actions';
const imgpath = "https://image.tmdb.org/t/p/w500/";
import { bindActionCreators } from 'redux';
import Image from 'react-native-image-progress';

class SEASONS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvseason: [],

        }

    }



    componentWillMount = () => {
        this.props.gettvSeason(this.props.data.info);
    }

    componentWillReceiveProps = (nextProps) => {
        //console.log("SEASONNUMBERIS: ", nextProps.tvseason);
        if (this.props.tvseason != nextProps.tvseason) {
            this.setState({ tvseason: nextProps.tvseason })
        }
    }

    render() {
        return (
          
                <FlatList
                    keyExtractor={item => item.id}
                    key={`${item => item.id * 0.1.toString()}`}
                    data={this.props.tvseason}
                    numColumns={1}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1 }}>
                            <View style={{flex:0.1}}>
                            <View style={{flex:1,flexDirection:'row',justifyContent: 'center',margin:totalSize(2)}}>
                                <View style={{flex:0.1,backgroundColor:'#004040'}}><Text style={{color:'white',alignSelf:'center'}}>{item.episode_number}</Text></View>
                                <View style={{flex:0.4}}><Text  style={{fontSize:totalSize(2),alignSelf:'center'}}>{item.air_date}</Text></View>
                                <View style={{flex:0.4}}><Text  style={{fontSize:totalSize(1.5),alignSelf:'flex-start'}}>{item.name}</Text></View>
                            </View>
                            <View style={{ alignSelf: 'center', flex: 0.01, borderWidth: 1, borderColor: '#DCDCDC', marginTop: height(1), width: width(95) }}></View>
                        </View>
                    </View>
                    } />
            
        );
    }

}


mapStateToProps = (state, props) => {

    return {
        tvseason: state.tvseasonReducer.data,
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SEASONS);