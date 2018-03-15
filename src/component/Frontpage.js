
import { Actions, Router} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import React ,{Component} from 'react'
import { View,Text,Button, TouchableHighlight,TouchableOpacity} from 'react-native';
import DrawerLayoutAndroid from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';
import SideBarMenu from './SideBarMenu';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        return (
            <DrawerLayoutAndroid
              drawerWidth={width(60)}           
              ref={(_drawer) => this.drawer = _drawer}
              drawerBackgroundColor="#fff"
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => <SideBarMenu />}>               
              <View style={{flex: 1}}>     
                <View style={{flex:0.1,flexDirection:'row' ,backgroundColor:'#778899'}}>
                <View style={{flex:0.2,backgroundColor:'#778899',margin:10}}>
                    <TouchableOpacity onPress={()=>this.openDrawer()}>
                     <Icon name='bars' size={35} color='white' style={{alignSelf:'center'}}/> 
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.5,backgroundColor:'#778899',margin:10}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white' ,textAlign:'center'}}>Cinematics</Text>
                </View>

                <View style={{flex:0.3,flexDirection:'row',backgroundColor:'#778899',margin:10}}>
                    <View style={{flex:0.5,backgroundColor:'#778899'}}>
                        <TouchableOpacity>
                             <Icon name='list' size={30} color='white' style={{alignSelf:'flex-end'}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.5,backgroundColor:'#778899',margin:10}}>
                        <TouchableOpacity>
                            <Icon name='search' size={17} style={{alignSelf:'flex-end'}} color='white'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flex:0.9,borderWidth:2}}>
            </View>
              </View>
            </DrawerLayoutAndroid>
        );
    }
}