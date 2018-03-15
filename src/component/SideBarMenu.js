
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
                <View style={{flex:0.25,borderWidth:1, backgroundColor:'#778899',flexDirection:'row'}}>
                <View>
                    <Icon name="imdb" size={75} style={{marginLeft:width(5), marginTop:width(15)}} />
                </View>
                    <View>
                         <Text style={{alignSelf:'flex-end',marginLeft:width(4), marginTop:width(29)}}>Connect to IMDB </Text>
                    </View>
                </View>

                <View style={{flex:0.07,borderWidth:1}}>
                    <TouchableOpacity style={{flexDirection:'row'}} >
                        <View style={{flex:0.5,borderWidth:1}}>
                            <Icon name='film' size={15} />
                        </View>
                        <View style={{flex:0.5,borderWidth:1}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Movies</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View>
                            <Icon name='live-tv' />
                        </View>
                        <View>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>TV Shows</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1,flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View>
                            <Icon name='search' />
                        </View>
                        <View>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Discover</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1,flexDirection:'row',flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View>
                            <Icon name='user' />
                        </View>
                        <View>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Popular People</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.12,borderWidth:1,flexDirection:'row',flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View>
                            <Icon name='alarm' />
                        </View>
                        <View>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Reminders</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1,flexDirection:'row',flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View>
                            <Icon name='question' />
                        </View>
                        <View>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Contact Developer</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1,flexDirection:'row',flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View>
                            <Icon name='movie-roll' />
                        </View>
                        <View>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Google+Community</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1,flexDirection:'row',flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View>
                            <Icon name='lock-open' />
                        </View>
                        <View>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Unlock Pro</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1,flexDirection:'row',flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View>
                            <Icon name='settings'/>
                        </View>
                        <View>
                            <Text style={{fontSize:15,fontWeight:'bold',flexDirection:'row'}}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,borderWidth:1}}>
                </View>

            </View>
        );
    }
}