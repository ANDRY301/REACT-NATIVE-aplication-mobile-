
import React, { useEffect, useState,useContext } from 'react';
import { View, ScrollView ,StyleSheet,TextInput,Dimensions} from 'react-native';
import Pfliste from './pfliste';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthConte } from '../heaauth/autfront'; 
import axios  from 'axios';


const {width,height}= Dimensions.get('window');

export default function Liste () {

    const [serc,setserc]=useState('');
    const {stateAuth} = useContext(AuthConte) ; 
    const [liste_de_inscri,setListe_de_inscri]=useState([]);

    useEffect( ()=>{
        axios.get(`http://localhost:3001/iot/get/${stateAuth.matricule}`)
        .then( (response)=>{
            setListe_de_inscri(response.data)
        }).catch( (err)=>{
        })
      
      },[liste_de_inscri]) 

    const listecontact = liste_de_inscri.filter( (item, index) => {

        if (serc === "") {
            return (
                <Pfliste 
                nom    ={item.nom}
                prenom ={item.prenom}
                tel    ={item.tel}
                index  = {index}
                />
            )
        } else if (item.nom.toLocaleLowerCase().includes(serc.toLocaleLowerCase())) {
            return (
                <Pfliste key={index} 
                nom    ={item.nom}
                prenom ={item.prenom}
                tel    ={item.tel}
                index  = {index}
                />
            )
        }
    }).map( (item,index)=>{
        return(
      <View  >
           <Pfliste key={index} 
                nom    ={item.nom}
                prenom ={item.prenom}
                tel    ={item.tel}
                index  = {index}
        />
      </View>
        )
    })
    return (
        <View style={styles.container} >
            <View style={styles.contenurech} >
                <FontAwesome5
                name={'search'}
                size={20}
                style={styles.iconstyle}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setserc}
                >
                </TextInput>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}
            >
                <View  style={styles.scroll_li}>{listecontact}</View>
            </ScrollView>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        display:'flex',
        justifyContent :'center',
        alignItems :'center',
        backgroundColor:'black',
        height :height
    },
    contenurech :{
        margin :10,
        width : 250,
        borderWidth: 0.5,
        top :40,
        borderRadius :80,
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'flex-start',
        alignItems :'center',   
        borderColor :'white'
    },
    input:{
      width : 200,
      color :'white'
    },
    scroll :{
    height : height/1.6,
    top : 40,
    width  : width-20
    },
    scroll_li:{
        paddingBottom :200    ,
        display:'flex'    ,
        justifyContent :'center',
        alignItems:'center',     
    },
    
    iconstyle:{
        marginLeft :15,
        color :'white'
    },

})