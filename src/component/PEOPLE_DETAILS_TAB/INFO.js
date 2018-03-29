import React, { Component } from 'react';
import { Text, View, Image, ScrollView, FlatList,ActivityIndicator, } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as myActions from '../../actions/actions';
const imgpath = "https://image.tmdb.org/t/p/w500/";
import { bindActionCreators } from 'redux';
class INFO extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gettingpersonal: [],
            gethisimg: []
        }
    }

    componentDidMount() {
        this.props.getpersonaldetails(this.props.data.info)
        this.props.getpersonalimg(this.props.data.info)
    }

    componentWillReceiveProps = (nextProps) => {

        if (this.props.gettingpersonal != nextProps.gettingpersonal) {


            this.setState({ gettingpersonal: nextProps.gettingpersonal })

        }
        if (this.props.gethisimg != nextProps.gethisimg) {

            this.setState({ gethisimg: nextProps.gethisimg })

        }
    }



    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 0.89 }}>
                    <ScrollView style={{ flex: 0.4, marginLeft: width(3), marginRight: width(3) }}>
                        <Text style={{ fontSize: totalSize(1.5), marginTop: height(1) }}>{this.props.gettingpersonal.biography}</Text>
                    </ScrollView>

                    <View style={{ flex: 0.6, margin: width(3) }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Born: {this.props.gettingpersonal.birthday}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Birthplace: {this.props.gettingpersonal.place_of_birth
                        }</Text>

                    </View>

                    <View style={{ alignSelf: 'center', flex: 0.01, borderWidth: 0.5, borderColor: '#DCDCDC', marginTop: height(1), width: width(95) }}></View>
                    <Text style={{ fontSize: totalSize(3), marginLeft: totalSize(1.5) }}>Images</Text>
                    <FlatList

                        horizontal={true}
                        keyExtractor={item => item.id}
                        key={`${item => item.id * 0.1.toString()}`}
                        numColumns={1}
                        data={this.props.gethisimg}
                        renderItem={({ item }) =>
                            <View style={{ alignItems: 'center', flexWrap: 'wrap', marginLeft: width(3), marginRight: width(3), marginTop: height(2) }}>

                                <Image source={{ uri: imgpath + item.file_path }} style={{ width: width(25), height: height(25) }} />
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        );

    }
}

mapStateToProps = (state, props) => {
    return {
        gettingpersonal: state.gettingpersonalReducer.data,
        gethisimg: state.gethisimgReducer.data

    }
}
mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(INFO);