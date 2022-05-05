
import React, { useEffect, useState ,useContext} from 'react';
import { View, ScrollView ,StyleSheet,TextInput,Dimensions, TouchableOpacity} from 'react-native';
import Pfpresent from './pfpresent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { AuthConte } from '../heaauth/autfront'; 

const {width,height}= Dimensions.get('window');

export default function Present () {
    
    const [serc,setserc]=useState('');
    const [info_delete,setInfo_delete]       = useState("");
    const {stateAuth} = useContext(AuthConte) ; 
    const [present_badget,setPresent_badget] = useState([]) ;

    
  const Delete_liste = () => {
    axios.post("http://localhost:3001/iot/delete_present", {
      matricule     : stateAuth.matricule

    }).then((response) => {
      setInfo_delete(response.data)
      alert(info_delete)

    }).catch( (err)=>{
      console.log(err)
    })
  }

     
useEffect( ()=>{
    //axios.get(`http://localhost:3001/iot/jointpresent/${stateAuth.matricule}`)
    axios.get(`http://localhost:3001/iot/jointpresent/${stateAuth.matricule}`)
    .then( (response)=>{
  
        setPresent_badget(response.data)
    }).catch( (err)=>{
   console.log(err);
    })
  
  },[])
  
   console.log(present_badget)

    const listecontact = present_badget.filter( (item, index) => {

        if (serc === "") {
            return (
                <Pfpresent key={index} 
                nom    ={item.nom}
                prenom ={item.prenom}
                numero ={item.numero}
                mail   ={item.mail}
                tel    ={item.tel}
                lera   ={item.lera}
                index  = {index}
                />
            )
        } else if (item.nom.toLocaleLowerCase().includes(serc.toLocaleLowerCase())) {
            return (
                <Pfpresent key={index} 
                nom    ={item.nom}
                prenom ={item.prenom}
                numero ={item.numero}
                mail   ={item.mail}
                tel    ={item.tel}
                lera   ={item.lera}
                index  = {index}
                />
            )
        }
    }).map( (item,index)=>{
        return(
      <View  >
          <Pfpresent key={index} 
                nom    ={item.nom}
                prenom ={item.prenom}
                numero ={item.numero}
                mail   ={item.mail}
                tel    ={item.tel}
                lera   ={item.lera}
                index  = {index}
                />
      </View>
        )
    })
    return (
        <View style={styles.container} >

            <View style={styles.corbsearc}>

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
                <TouchableOpacity style={styles.iconpoub} onPress={Delete_liste}>
                    <FontAwesome5
                        name={'trash'}
                        size={25}
                        style={{ color: 'white' }}

                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}
            >
                <View style={styles.scroll_li}>{listecontact}</View>
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
    corbsearc:{
       display :'flex',
        flexDirection : 'row',
        justifyContent :'space-around',
        top :10,
        height : 50,
        width :width-20
    },
    contenurech :{
        width : 200,
        borderWidth: 0.5,
        borderRadius :80,
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'flex-start',
        alignItems :'center',   
        borderColor :'white'
    },
    iconpoub :{
      display :'flex',
      justifyContent :'center',
      alignItems:'center',
      padding :10,
      borderWidth : 1,
      borderRadius : 100,
      borderColor :'white',
      backgroundColor :'rgba(206, 0, 0, 0.875)'
    },
    input:{
      width : 150,
      color :'white'
    },

    scroll :{
   height : height/1.6,
   top : 20,
   width  : width-20,

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