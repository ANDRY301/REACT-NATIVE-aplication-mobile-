
import React from 'react';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Vatany from './vatany';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View ,Text,StyleSheet} from 'react-native';
import Vatanyinscription from './vatanyinscription';


export default function Tabvatany() {

    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator
        tabBarOptions={{
            showLabel:false,
            activeBackgroundColor  : "rgb(255, 195, 0);",
            inactiveBackgroundColor: "rgb(255, 195, 0);",
        }}
        >
            <Tabs.Screen name ="Iot-301" component ={Vatany} options={{
                 headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={styles.coptiontab}>
                     
                          <FontAwesome5
                        size={20}
                         name={'home'}                        
                         style ={{    
                             
                            color :focused ?'white' : 'rgba(216, 224, 231, 0.808)',                      
                            resizeMode :'contain',
                            tintColor : focused ?'white' : 'rgba(216, 224, 231, 0.808)'
                            
                        }}/>
                        <Text style={{color:focused ? 'white':  'rgba(216, 224, 231, 0.808)'}}>And-Germ</Text>
                    </View>
                )
            }}/>
            <Tabs.Screen name ="Inscription" component ={Vatanyinscription}  options={{
                  headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={styles.coptiontab}>
                        <FontAwesome5
                        size={20}
                         name={'prescription-bottle'}                        
                         style ={{
                            color :focused ?'white' : 'rgba(216, 224, 231, 0.808)',
                            resizeMode :'contain',
                            tintColor : focused ?'white' : 'rgba(216, 224, 231, 0.808)'
                        }}/>
                        <Text style={{color:focused ? 'white':  'rgba(216, 224, 231, 0.808)'}}>Inscription</Text>
                    </View>
                )
            }}/>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    coptiontab :{
        display:'flex',
        justifyContent :'center',
        alignItems :'center',
        padding :5,
       
    }
})