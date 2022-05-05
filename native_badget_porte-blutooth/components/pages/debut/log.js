import React from 'react'
import { View ,Text,StyleSheet,Dimensions,Image} from 'react-native'

const {width,height}= Dimensions.get('window');

export default function Log() {
    return (
        <>
            <View style={styles.log_conta}>
                <Text style={styles.titre_and}>AND-GERM</Text>
                <Image source={require('../../images/logo-and.png')} style={styles.logo} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    log_conta:{
        backgroundColor :'rgb(255, 195, 0)',
        display:'flex',
        height: height,
        justifyContent:'center',
        alignItems:'center'
    },
    logo :{
        resizeMode :'contain',
        width : width *1,
        height  : height *0.48,
        zIndex :2,
      },
      titre_and :{
          color:'white',
          fontSize:20
      }

})