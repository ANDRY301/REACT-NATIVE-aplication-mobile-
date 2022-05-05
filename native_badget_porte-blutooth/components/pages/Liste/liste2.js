
import React, { useEffect, useState ,useContext} from 'react';
import { View, ScrollView ,StyleSheet,TextInput,Dimensions,Text,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios  from 'axios';
import { AuthConte } from '../heaauth/autfront'; 

const {width,height}= Dimensions.get('window');

export default function Liste2 () {

    const [serc,setserc]=useState('');
    const [liste_de_inscri,setListe_de_inscri]=useState([]);

    const {stateAuth} = useContext(AuthConte) ; 
    
useEffect( ()=>{
    axios.get(`http://localhost:3001/iot/get/${stateAuth.matricule}`)
    .then( (response)=>{
        setListe_de_inscri(response.data)
    }).catch( (err)=>{
    })
  
  },[liste_de_inscri]) 

  const DELETA = (jojo) => {
    axios.delete(`http://localhost:3001/iot/badget-delete/${jojo}`).then((response) => {
        console.log("bien effacer partie front ")
    }).then( (response)=>{
        console.log(response)
    })
}

    const listecontact = liste_de_inscri.filter( (item, index) => {

        if (serc === "") {
            return (
                <>
                <View style={styles.conliste} key={item.id}>
                    <View >
                        <View style={styles.vtext}>
                            <Text style={styles.text2}> Prenom </Text>
                            <Text style={styles.text2}>   <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa} /> </Text>
                            <Text style={styles.text2}>: {item.prenom}</Text>
                        </View>

                        <View style={styles.vtext} >
                            <Text style={styles.text}> Nom </Text>
                            <Text>         <FontAwesome5 name={'user'} solid size={12} style={styles.fontwa} /> </Text>
                            <Text style={styles.text3}>:  {item.nom}</Text>
                        </View>

                    </View>
                    <View>
                        <TouchableOpacity style={styles.effacer} onPress={() => { DELETA(item.id) }}>

                            <FontAwesome5 name={'trash-alt'} solid size={15} style={styles.fontwa} />
                        </TouchableOpacity>
                    </View>
                </View>
            </>
            )
        } else if (item.nom.toLocaleLowerCase().includes(serc.toLocaleLowerCase())) {
            return (
                <>
                    <View style={styles.conliste} key={item.id}>
                        <View >
                            <View style={styles.vtext}>
                                <Text style={styles.text2}> Prenom </Text>
                                <Text style={styles.text2}>   <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa} /> </Text>
                                <Text style={styles.text2}>: {item.prenom}</Text>
                            </View>

                            <View style={styles.vtext} >
                                <Text style={styles.text}> Nom </Text>
                                <Text>         <FontAwesome5 name={'user'} solid size={12} style={styles.fontwa} /> </Text>
                                <Text style={styles.text3}>:  {item.nom}</Text>
                            </View>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.effacer} onPress={() => { DELETA(item.id) }}>
                                <FontAwesome5 name={'trash-alt'} solid size={15} style={styles.fontwa} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )
        }
    }).map( (item,index)=>{
        return(
            <>
                    <View style={styles.conliste} key={item.id}>
                        <View >
                            <View style={styles.vtext}>
                                <Text style={styles.text2}> Prenom </Text>
                                <Text style={styles.text2}>   <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa} /> </Text>
                                <Text style={styles.text2}>: {item.prenom}</Text>
                            </View>

                            <View style={styles.vtext} >
                                <Text style={styles.text}> Nom </Text>
                                <Text>         <FontAwesome5 name={'user'} solid size={12} style={styles.fontwa} /> </Text>
                                <Text style={styles.text3}>:  {item.nom}</Text>
                            </View>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.effacer} onPress={() => { DELETA(item.id) }}>

                                <FontAwesome5 name={'trash-alt'} solid size={15} style={styles.fontwa} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
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
                    placeholder="Nom"
                    placeholderTextColor="rgba(255, 255, 255, 0.301)"
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
        borderWidth: 0.8,
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
      color : 'white'
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
        color : 'white'
    },

    /*/ partie Pliste2 css/*/
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