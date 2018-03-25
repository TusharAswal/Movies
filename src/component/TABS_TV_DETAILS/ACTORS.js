import React, {Component} from 'react';
import {Text,View,Image,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import {height,width,totalSize} from 'react-native-dimension';
import { connect } from 'react-redux';
import * as myActions from '../../actions/actions';
import { bindActionCreators } from 'redux';
const imgpath = "https://image.tmdb.org/t/p/w500/";
import {
    Actions,
    
  } from 'react-native-router-flux';
class ACTORS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            casttv:[]
        }
    }

    componentWillMount() {
        
    this.props.gettingcasttv(this.props.data.info);
    }

   componentWillReceiveProps=(nextProps)=>{
   // console.log("Cast is coming here",nextProps.cast)    
   
    if(this.state.casttv!=nextProps.casttv){
            this.setState({cast:nextProps.casttv})
        }
    }

  
    render () {
       
        return(
        <View style={{flex:1}}>
            <FlatList 
                keyExtractor={item=> item.id}
                key={`${item => item.id*0.1.toString()}`}
                data={this.props.casttv}
                numColumns={1}
                renderItem={({item}) => 
                <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>Actions.PEOPLE_DETAIL({'id':item.id})} style={{flex:0.99,flexDirection:'row', height:height(10),width:width(100),marginTop:height(3)}}>
                    <View style={{flex:0.2,justifyContent:'center'}}><Image source={{ uri: imgpath + item.profile_path }} style={{alignSelf:'center', borderRadius:100,height:height(10),width:width(10) }} /></View>
                    <View style={{flex:0.4,justifyContent:'center'}}><Text style={{fontSize:12, color:'black'}}>Name: {item.name}</Text></View>
                    <View style={{flex:0.4,justifyContent:'center'}}><Text style={{fontStyle: 'italic',color:'#778899',fontSize:12, color:'black'}}>As: {item.character}</Text></View>
                </TouchableOpacity>
                <View style={{alignSelf:'center',flex:0.01,borderWidth:1,borderColor:'#DCDCDC',marginTop:height(1),width:width(95)}}></View>
                </View>                
            } />
        </View>           
               
        );

        }
}

mapStateToProps=(state, props) => {
    return{
        casttv: state.casttvReducer.data,

    }
} 

mapDispatchToProps=(dispatch) => {
    return bindActionCreators(myActions,dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ACTORS);