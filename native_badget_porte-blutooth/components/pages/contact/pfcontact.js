import axios from 'axios';
import React from 'react'
import { View ,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// cree une autre mysql change tel nom etc ...
const {width,height}= Dimensions.get('window');
export default function Pfcontact({
 tel   ='',
 nom   ='',
 mail  = '',
 index ='',
 id    = ''

}) {

    const DELETA = (jojo) => {
        axios.delete(`http://localhost:3001/iot/contact_delete/${jojo}`).then((response) => {
            console.log("bien effacer partie rectifier 29" + response)
        })
    }
    return (

        <View style={styles.conliste} key={index}>
            <View >
                <View style={styles.vtext}>
                    <Text style={styles.text2}> Nom </Text>
                    <Text style={styles.text2}>     <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa}/> </Text>
                    <Text style={styles.text2}>: {nom}</Text>
                </View>

                <View style={styles.vtext} >
                    <Text style={styles.text}> Mail </Text>
                    <Text>      <FontAwesome5 name={'user'} solid size={12}style={styles.fontwa} /> </Text>
                    <Text style={styles.text3}>:  {mail}</Text>
                </View>
                <View style={styles.vtext} >
                    <Text style={styles.text}> Tel </Text>
                    <Text>         <FontAwesome5 name={'mobile-alt'} solid size={12} style={styles.fontwa}/> </Text>
                    
                    <Text style={styles.text}>:  {tel}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.effacer} onPress={() => { DELETA(id) }}>
            
                <FontAwesome5 name={'trash-alt'} solid size={15} style={styles.fontwa}/> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    fontwa :{
        color :'white'
    },
    conliste:{
        borderRadius :0.6,
        borderWidth :0.4,
        width : 250,
        padding :  18,
        display:'flex',
        flexDirection :'row',
        justifyContent :'space-between',
        alignItems:'center',
        margin : 5,
        borderColor:'white',
        backgroundColor :'rgba(199, 0, 0, 0.973)',
    },

    vtext :{
       display : 'flex',
       flexDirection :'row'
    },
        text :{
         color :'white'
        },
        text2 :{
            color :'white',
            fontWeight : 'bold'

           },
           text3 :{
            color :'white',
            fontSize : 10
           },
           effacer :{
            borderWidth:1,
            padding :6,
            borderRadius :3,
            marginRight :10,
            borderColor :'white'
        }
})