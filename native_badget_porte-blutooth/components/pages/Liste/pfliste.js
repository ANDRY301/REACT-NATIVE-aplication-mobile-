import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Pfliste ({
    nom      = '',
    prenom   = '',
    tel      = '',
    index    =''

}) {

    return (

        <View style={styles.conliste} key={index}>
            <View >
                <View style={styles.vtext}>
                    <Text style={styles.text2}> Nom </Text>
                    <Text style={styles.text2}>          <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa} /> </Text>
                    <Text style={styles.text2}>: {nom}</Text>
                </View>

                <View style={styles.vtext}>
                    <Text style={styles.text2}> Prenom </Text>
                    <Text style={styles.text2}>    <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa} /> </Text>
                    <Text style={styles.text2}>: {prenom}</Text>
                </View>
                <View style={styles.vtext} >
                    <Text style={styles.text}> Tel </Text>
                    <Text>              <FontAwesome5 name={'mobile-alt'} solid size={12} style={styles.fontwa} /> </Text>
                    <Text style={styles.text}>:  {tel}</Text>
                </View>
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
        borderWidth :0.5,
        width : 250,
        padding :  18,
        display:'flex',
        flexDirection :'row',
        justifyContent :'space-between',
        alignItems:'center',
        margin : 5,
        backgroundColor :'rgba(199, 0, 0, 0.973)',
        borderColor :'white'        
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
            marginRight :10
        }
       
})