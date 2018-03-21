
import { Actions, Router} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React ,{Component} from 'react'
import { View,Text,Button, TouchableOpacity,Image} from 'react-native';
import DrawerLayoutAndroid from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';


export default class SideBarMenu extends Component {
   

    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:0.25, backgroundColor:'#323232',flexDirection:'row'}}>
                <View style={{ flex:0.45}}>
                <Image source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={{ justifyContent:'flex-end' ,height: height(15), width:width(20),marginTop:height(8), marginLeft:height(3) }} />
                </View>
                    <View style={{justifyContent:'flex-start',flex:0.55}}>
                         <Text style={{alignSelf:'flex-end',color:'white',fontWeight:'bold', marginTop:width(29), marginRight:width(2)}}>Connect to MDB </Text>
                    </View>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>Actions.popTo('Frontpage')} style={{flexDirection:'row'}} >
                        <View style={{flex:0.2}}>
                            <Icon name='film' size={15} style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Movies</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => Actions.Frontpage_Tv()} style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon name='tv'  size={15} style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>TV Shows</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon size={15} name='search' style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Discover</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View style={{flex:0.2}}>
                            <Icon  size={15} name='user' style={{alignSelf:'center'}}/>
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Popular People</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.12,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View style={{flex:0.2}}>
                            <Icon size={15} name='bell' style={{alignSelf:'center'}}/>
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Reminders</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                         <View style={{flex:0.2}}>
                            <Icon size={15} name='question-circle' style={{alignSelf:'center'}}/>
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Contact Developer</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon size={15} name='google-plus' style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Google+Community</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View  style={{flex:0.2}}>
                            <Icon size={15} name='unlock-alt' style={{alignSelf:'center'}} />
                        </View>
                        <View  style={{flex:0.8}}>
                            <Text  style={{fontSize:15,fontWeight:'bold'}}>Unlock Pro</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.07,justifyContent:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <View size={20}style={{flex:0.2}}>
                            <Icon name='cog' style={{alignSelf:'center'}}/>
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