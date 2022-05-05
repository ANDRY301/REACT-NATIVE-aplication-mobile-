import React, { useState } from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { View ,Text,StyleSheet, ToastAndroid, TouchableOpacity, Switch, Image,Dimensions, ScrollView} from 'react-native';
import Choixaiza from './choixaiza';

const {width,height} = Dimensions.get('window')  ;

export default function Blulohany({navigation}) {
  
  const [affiche,setaffiche]           =useState(false);
  const [liste,setListe]               =useState([]) ;
  const [bolenable,setBolenable]       =useState(false);
  const [fanamarihana,setfanamarihana] =useState("Déconnection");

  const enableBluthuetooth= async ()=>{
    try{
      await BluetoothSerial.requestEnable();
      const listeretra = await BluetoothSerial.list(); 
      await BluetoothSerial.stopScanning();
      setBolenable(true);
      setListe(listeretra);
      setfanamarihana("Connexion")

    }catch(error){
      console.log(error)
    }
  }

  const disableBluthooth = async ()=>{
    try{
      await BluetoothSerial.disable();
      await BluetoothSerial.stopScanning(); 
      setBolenable(false);
      setListe([]);
      setfanamarihana("Déconnection")
  
    }catch(error){
      console.log(error)
    }
  }

  const connect =(device)=> {
    BluetoothSerial.connect(device.id)
    .then((res) => {
      console.log(`Connected to device ${device.name}`);
      ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
      setaffiche(true);
    })
    .catch((err) =>setfanamarihana("Probleme de connection"))
  }

  const discoverAvailableDevices =()=>{
    BluetoothSerial.discoverUnpairedDevices()
    .then ( (response)=>{
  
    })
    .catch((err) => console.log(err.message))
  }

  const Liste_ny_bluthoot = liste.map( (item,index)=>{
    return(
      <TouchableOpacity  onPress={()=>connect(item)} >
         <View style={styles.listecontainer} >
           <Image source={require('../../images/bluimg.png')} style={styles.imgbluth} />
           <Text style={styles.namebluth}>{item.name}</Text>
         </View>
      </TouchableOpacity>
    )
})

const toggleBluetooth =(value)=> {
    if (value === true) {
      enableBluthuetooth();
    } else {
      disableBluthooth();
      setaffiche(false);
    }
  }
//   backgroundColor:'rgba(173, 158, 19, 0.586)',
const pagemisy =  !affiche ? <View>{Liste_ny_bluthoot}</View>   :   <Choixaiza navigation={navigation}/> 
    return (
        <View  style={styles.container}>
            <View style={styles.scantoogle}>
                <View>
                    <TouchableOpacity onPress={discoverAvailableDevices}>
                        <Text style={styles.scan}>| - | Scann</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.toogle}>

                        <View>
                            <Text style={styles.fanamarihana}>{fanamarihana}</Text>
                        </View>
                        <View>
                            <Switch
                                style={styles.toseul}
                                value={bolenable}
                                onValueChange={(val) => toggleBluetooth(val)}
                            />
                        </View>
                    </View>
                </View>
        </View>

        <View style={styles.scroll}>

          <ScrollView style={{ marginTop: 15 }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}

          >
            <View style={styles.mapliste}>
              {pagemisy}
            </View>
          </ScrollView>
        </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
    },
    titre :{
     
        display :'flex',
        alignItems :'center',
        height : height/10
    },
    texttitre :{
     fontSize : 17,
     fontWeight : 'bold',
     padding   :15
    },
    scantoogle :{
       display :'flex',
    
       flexDirection :'row',
       justifyContent :'space-between',
       alignItems :'center',
       height : height/10,
    },
    scan :{
        paddingLeft :30,
        color :'white',
        fontWeight :'bold'
    },
    toogle : {
    padding :15,
    display :'flex',
    flexDirection :'row',
    justifyContent :'flex-start',
    alignItems :'center'
    },
    fanamarihana :{
        color :'white'
    },
    toseul :{
        margin :3,
    },
    scroll:{

      height : height
    },
    mapliste :{
     display :'flex',
     justifyContent :'flex-start',
     alignItems :'center', 
     flexDirection :'column',
    },
 
    listecontainer :{
        marginBottom :15,
        padding : 15,
        display :'flex',
        flexDirection :'row',
        justifyContent :'space-between',
        alignItems :'center',
        width   : width*0.9,      
    },
    imgbluth :{
        width : 25,
        height : 25,
        resizeMode :'contain',
    },
    namebluth :{
        fontSize : 20,
        fontWeight :'800',
  
    },
})

