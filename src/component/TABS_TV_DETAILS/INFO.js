import React, {Component} from 'react';
import {Text,View,Image,ScrollView,FlatList} from 'react-native';
import {height,width,totalSize} from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as myActions from '../../actions/actions';
const imgpath = "https://image.tmdb.org/t/p/w500/";
import { bindActionCreators } from 'redux';
class INFO extends Component {
    constructor(props) {
        super(props);

        this.state={
            rating:[],
            firstAir:[],
            lastAir:[],
            net:[],
            showType:[],
            showStat:[],
            creator:[],
            overview:[],
            similartv:[]
            
        }
    }

    componentDidMount() {
       
    this.props.getRat(this.props.data.info);
    this.props.getfirstAir(this.props.data.info);
    this.props.getlastAir(this.props.data.info);
    this.props.getnet(this.props.data.info);
    this.props.getshowType(this.props.data.info);
    this.props.getshowStat(this.props.data.info);
    this.props.getCreator(this.props.data.info);
    this.props.getOverview(this.props.data.info);
    this.props.getsimilarTv(this.props.data.info);
    }

    componentWillReceiveProps=(nextProps)=> {
        if(this.props.rating!=nextProps.rating) {
            this.setState({rating:nextProps.rating})
        }

        if(this.props.firstAir!=nextProps.firstAir) {
            this.setState({firstAir:nextProps.firstAir})
        }

        if(this.props.lastAir!=nextProps.lastAir) {
            this.setState({lastAir:nextProps.lastAir})
        }

        if(this.props.net!=nextProps.net) {
            this.setState({net:nextProps.net})
        }

        if(this.props.showType!=nextProps.showType) {
            this.setState({showType:nextProps.showType})
        }

        if(this.props.showStat!=nextProps.showStat) {
            this.setState({showStat:nextProps.showStat})
        }

        if(this.props.creator!=nextProps.creator) {
            this.setState({creator:nextProps.creator})
        }
      
        if(this.props.overview!=nextProps.overview) {
            this.setState({overview:nextProps.overview})
        }

        if(this.props.similartv!=nextProps.similartv) {
            this.setState({similartv:nextProps.similartv})
        }
    }


    
    render () {
      // console.log("DAtA RECIEVED ",this.props.rating)
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.2,marginTop:5,marginRight:10,marginLeft:10,flexDirection:'row'}}>
                    <View style={{flex:0.1666,alignItems:'center'}}>
                        <Icon name='star' size={height(5)} style={{color:'#B0E0E6'}}/>
                        <Text style={{fontSize:10}}>Rate</Text>
                    </View>
                    <View style={{flex:0.1666,alignItems:'center'}}>
                        <Image source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={{height: height(5),width:width(9) }} />
                        <Text style={{fontSize:10}}>{this.props.rating}</Text>
                    </View>
                    <View style={{flex:0.1666,alignItems:'center'}}>
                        <Icon name='imdb' size={height(5)} style={{color:'#B0E0E6'}}/>
                        <Text style={{fontSize:10}}>{this.props.rating}</Text>
                    </View>
                    <View style={{flex:0.1666,alignItems:'center'}}>
                        <Image source={{ uri: 'https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/Art/Rotten-Tomatoes-Certified-Fresh_2x.png' }} style={{height: height(5),width:width(9) }} />
                        <Text style={{fontSize:10}}>{this.props.rating}</Text>
                    </View>
                    <View style={{flex:0.1666,alignItems:'center'}}>
                        <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/movix-circular/128/popcorn_cinema_bucket_food_movie_entertainment-128.png' }} style={{height: height(5),width:width(9) }} />
                        <Text style={{fontSize:10}}>{this.props.rating}</Text>
                    </View>
                    <View style={{flex:0.1666,alignItems:'center'}}></View>
                </View>
                <View style={{marginTop:height(1),alignSelf:'center',flex:0.01,borderWidth:0.5,borderColor:'#DCDCDC',marginTop:height(1),width:width(95)}}></View>
                <ScrollView style={{flex:0.89}}>
                    <ScrollView style={{flex:0.4,marginLeft:width(3),marginRight:width(3)}}>
                        <Text style={{fontSize:totalSize(1.5),marginTop:height(1)}}>{this.props.overview}</Text>
                    </ScrollView>

                    <View style={{flex:0.6,margin:width(3)}}>
                        <Text style={{fontWeight:'bold',fontSize:12}}>First Air Date: {this.props.firstAir}</Text>
                        <Text style={{fontWeight:'bold',fontSize:12}}>Lst Air Date: {this.props.lastAir}</Text>
                        <Text style={{fontWeight:'bold',fontSize:12}}>Network: {this.props.net}</Text>
                        <Text style={{fontWeight:'bold',fontSize:12}}>Created By: {this.props.creator}</Text>
                        <Text style={{fontWeight:'bold',fontSize:12}}>Show Type: {this.props.showType}</Text>
                        <Text style={{fontWeight:'bold',fontSize:12}}>Show Status: {this.props.showStat}</Text>
                    </View>

                     <View style={{alignSelf:'center',flex:0.01,borderWidth:0.5,borderColor:'#DCDCDC',marginTop:height(1),width:width(95)}}></View>
                     <Text style={{fontSize:totalSize(2), marginLeft:width(3),color:'black'}} >Similar Tv Shows</Text>
                    <FlatList
                        
                        horizontal={true}
                        keyExtractor={item=> item.id}
                        key={`${item => item.id*0.1.toString()}`}
                        numColumns={1}
                        data={this.props.similartv}
                        renderItem={({item}) => 
                        <View style={{ alignItems:'center',flexWrap: 'wrap', marginLeft:width(3),marginRight:width(3),marginTop:height(2)}}>
                            
                            <Image source={{ uri: imgpath + item.poster_path}} style={{width:width(25), height:height(25)}} />
                            <Text numberOfLines={1} style={{width:width(23)}} >{item.original_name}</Text>
                            <Text numberOfLines={2} style={{width:width(23)}} >{item.first_air_date}</Text>
                        </View>
                    }
                    />
                </ScrollView>
            </View>
        );

        }
}

mapStateToProps=(state, props)=>{
    return {
        rating: state.getRatReducer.data,
        firstAir: state.getfirstAirReducer.data,
        lastAir: state.getlastAirReducer.data,
        net: state.getnetReducer.data,
        showType: state.getshowTypeReducer.data,
        showStat :state.getshowStatReducer.data,
        creator: state.getcreatorReducer.data,
        overview: state.getoverviewReducer.data,
        similartv: state.getsimilartvReducer.data,
       
    }
}
mapDispatchToProps=(dispatch)=> {
    return bindActionCreators(myActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(INFO);