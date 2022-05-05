import React from 'react'
import { View ,Text,StyleSheet,TouchableOpacity} from 'react-native'
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Pfliste2({
    prenom ='',
    nom  ='',
    id   =''

}) {

    const DELETA = (jojo) => {
    axios.delete(`http://localhost:3001/iot/badget-delete/${jojo}`).then((response) => {
        console.log("bien effacer partie front ")
    }).then( (response)=>{
        console.log(response)
    })
}


    return (

        <View style={styles.conliste} key={id}>
            <View >
                <View style={styles.vtext}>
                    <Text style={styles.text2}> Prenom  </Text>
                    <Text style={styles.text2}>   <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa}/> </Text>
                    <Text style={styles.text2}>: {prenom}</Text>
                </View>

                <View style={styles.vtext} >
                    <Text style={styles.text}> Nom </Text>
                    <Text>         <FontAwesome5 name={'user'} solid size={12}style={styles.fontwa} /> </Text>
                    <Text style={styles.text3}>:  {nom}</Text>
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
        borderWidth :0.1,
        width : 250,
        padding :  18,
        display:'flex',
        flexDirection :'row',
        justifyContent :'space-between',
        alignItems:'center',
        margin : 5,
        backgroundColor :'rgba(199, 0, 0, 0.973)'
    },
//   backgroundColor :'rgb(255, 195, 0)'
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
            borderColor :'white',   
        }

})