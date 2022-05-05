import React, { useEffect, useState } from 'react';
import { View,ScrollView ,StyleSheet,TextInput,Dimensions} from 'react-native';
import axios from 'axios';
import Pfcode_du_travail from './pfcode_du_travail';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width,height}= Dimensions.get('window');

export default function Code_du_travail() {
 
    const [codetravail ,setCodetravail] = useState([]);
    const [serc,setserc]                = useState('');

     useEffect( ()=>{
         axios.get("http://localhost:3001/iot/article_de_loi")
         .then( (response)=>{
          setCodetravail(response.data)
         })
     },[codetravail])


     const listecontact = codetravail.filter( (item, index) => {

        if (serc === "") {
            return (
                <Pfcode_du_travail key={item.id} 
                 titre   = {item.titre}
                 loi     = {item.loi}
                 article = {item.article}
      
                />
            )
        } else if (item.titre.toLocaleLowerCase().includes(serc.toLocaleLowerCase())) {
            return (
                <Pfcode_du_travail  key={item.id}
                titre   = {item.titre}
                loi     = {item.loi}
                article = {item.article}
              
                />
            )
        }
    }).map( (item,index)=>{
        return(
      <View  >
                <Pfcode_du_travail  key={item.id}
                     titre   = {item.titre}
                     loi     = {item.loi}
                     article = {item.article}   
                     index   ={item.id} 
        />
      </View>
        )
    })

    return (
        <View style={styles.container}>
     
            <View style={styles.contenurech} >
                <FontAwesome5
                name={'search'}
                size={20}
                style={styles.iconstyle}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setserc}
                    placeholder="Theme"
                    placeholderTextColor="rgba(255, 255, 255, 0.301)"
                >
                </TextInput>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.scrocontact}>{listecontact}</View>
                <View style={styles.fintext} >
                
                </View>
            </ScrollView>
           
        </View>
    )
}

const styles = StyleSheet.create({
    fintext :{
        margin :5,
        padding :15
      },
    container :{
        backgroundColor :'black',
        height  : height,
        display :'flex',
        justifyContent :'center',
        alignItems :'center',
    },
    contenurech :{
        margin :10,
        width : 250,
        borderWidth: 0.5,
        borderRadius :80,
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'flex-start',
        alignItems :'center',
        borderColor :'white',
    },
    iconstyle:{
        marginLeft :15,
        color :'white'
    },
    input :{
        height: 40,
        margin: 5,
        width  : 200,
        color   :'white'   
    },
    scrocontact :{
        display :'flex',
        alignItems :'center',
        margin :5,
        paddingBottom :80,
        backgroundColor:'rgba(216, 224, 231, 0.0508)'
    }
})