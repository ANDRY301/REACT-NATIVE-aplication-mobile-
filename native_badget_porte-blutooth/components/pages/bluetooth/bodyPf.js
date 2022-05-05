import React, { useState } from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { View ,Text,StyleSheet, TouchableOpacity,Dimensions,Image} from 'react-native';

const {width} = Dimensions.get('window')  ;

export default function BodyPf({
    id          ='',
    lettre_oui  ='',
    lettre_non  ='',
    sary1       ='',
    sary2       =''
 
}) {

    const [reference,setreferenc]=useState(false)

    const toggleSwitch=()=>{
        BluetoothSerial.write(lettre_oui)
        .then((res) => {
        })
        .catch((err) => console.log(err.message))
      }
      
      const toggleSwitchoff=()=>{
        BluetoothSerial.write(lettre_non)
        .then((res) => {
        })
        .catch((err) => console.log(err.message))
      }
    
    const manovabutton = reference ? toggleSwitchoff: toggleSwitch  ;
    const titrenom     = reference ? 'ON' : 'OFF' ;
    const etatled      = reference ? sary2 : sary1
 
    const mandefa = ()=>{
        manovabutton()
        setreferenc(!reference)
    }
    return (            
        <View style={styles.btnconteiner}>
            <View>
                <Image source={etatled} style={styles.imgstyle}/>
            </View>

            <View>
                <TouchableOpacity onPress={mandefa}>
                    <Text style={styles.btn}>{titrenom}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    btnconteiner :{
      backgroundColor :'rgba(173, 158, 19, 0.586)',
      margin : 5,
      display :'flex',
      flexDirection :'row',
      justifyContent :'space-between',
      width : width*0.8,
      padding :10,
      borderRadius :2,
      marginBottom:15
  },
  ico :{
  
      padding :3
  },
  btn :{
    fontWeight :'bold',
    padding :3,
    fontSize : 15,
    color : 'black'
    
  },
  imgstyle :{
    width : 25,
    height : 25,
    resizeMode :'contain',
},
})