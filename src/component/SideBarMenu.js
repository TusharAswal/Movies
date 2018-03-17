
import { Actions, Router} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React ,{Component} from 'react'
import { View,Text,Button, TouchableOpacity} from 'react-native';
import DrawerLayoutAndroid from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';


export default class SideBarMenu extends Component {
   

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:0.25, backgroundColor:'#778899',flexDirection:'row'}}>
                <View>
                    <Icon name="imdb" size={75} style={{marginLeft:width(5), marginTop:width(15)}} />
                </View>
                    <View>
                         <Text style={{alignSelf:'flex-end',marginLeft:width(4), marginTop:width(29)}}>Connect to IMDB </Text>
                    </View>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}} >
                        <View style={{flex:0.2}}>
                            <Icon name='film' size={15} style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Movies</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon name='live-tv'  size={15} style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>TV Shows</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon name='search' style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Discover</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View style={{flex:0.2}}>
                            <Icon name='user' style={{alignSelf:'center'}}/>
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Popular People</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.12,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View style={{flex:0.2}}>
                            <Icon name='alarm' style={{alignSelf:'center'}}/>
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Reminders</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View style={{flex:0.2}}>
                            <Icon name='question' style={{alignSelf:'center'}}/>
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Contact Developer</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon name='movie-roll' style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Google+Community</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View  style={{flex:0.2}}>
                            <Icon name='lock-open' style={{alignSelf:'center'}} />
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Unlock Pro</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon name='settings' style={{alignSelf:'center'}}/>
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text style={{fontSize:15,fontWeight:'bold',flexDirection:'row'}}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07}}>
                </View>

            </View>
        );
    }
}