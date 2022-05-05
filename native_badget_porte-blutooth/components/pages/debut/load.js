import React from 'react'
import { View ,Text,StyleSheet,Dimensions,Image} from 'react-native'

const {width,height}= Dimensions.get('window');
export default function Load() {
    
    return (
        <View>
            <Text>LOADING....</Text>
            <Image source= {require('../../images/logo-and.png')} style={styles.logo}/>
        </View>
       
    )
}

const styles = StyleSheet.create({
    logo :{
        resizeMode :'contain',
        width : width *0.20,
        height  : height *0.18,
        zIndex :2,
        top :-162,
        left :82,
        position :'absolute'
      },
})