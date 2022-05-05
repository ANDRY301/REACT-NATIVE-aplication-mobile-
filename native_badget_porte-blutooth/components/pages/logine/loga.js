import React ,{useState,useContext}from 'react';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View ,Text,Image, TextInput,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import { AuthConte } from '../heaauth/autfront'; 


const {width,height}= Dimensions.get('window');

export default function Loga({navigation}) {

//ajout teste
const {setstateAuth}                         = useContext(AuthConte)
const [matricule,setmatricule]               = useState('');
const [password,setpassword]                 = useState('');
const [info_mot_de_pass,setInfo_mot_de_pass] = useState('')

const LOGIN_page = ()=>{
  axios.post("http://localhost:3001/badget/users/log",{
        matricule  : matricule,
        password   : password
  }).then( (response)=>{
    if (response.data.error) {
        setInfo_mot_de_pass(response.data.error);
      } else {
      AsyncStorage.setItem('accessToken',response.data.token)
      setstateAuth({matricule:response.data.matricule,id:response.data.id,status:true}) 
      navigation.navigate({name : 'Gmao-AND'}) ;
          
     }
  })  
}
    return (
        <View style={styles.parcontainer}>

              
            <View style={styles.insccon}>
            <View style={styles.insccontainer}>
             <View>
                 <Image source= {require('../../images/logo-and.png')} style={styles.logo}/>
             </View>
            
            <View    style={styles.dimy}></View>

                <View style={styles.Inscription} >
                <View    style={styles.efatrax1}></View>
                <View    style={styles.efatrax2}></View>
                    <Text style={styles.instext2}>Login</Text> 

                </View>
                <View style={styles.parinput}>
                    <View style={styles.inpicon}>
                        <Text>  <FontAwesome5 name={'user'} solid size={12} style={styles.fontwa} />   </Text>
                        <TextInput style={styles.textinput} placeholder="matricule"        defaultValue={matricule} onChangeText={matricule => setmatricule(matricule)} />
                    </View>

                    <View>
                        <View style={styles.inpicon}>
          
                            <Text><FontAwesome5 name={'lock'} solid size={12} style={styles.fontwa} />  </Text>
                            <TextInput style={styles.textinput} placeholder="password" defaultValue={password} onChangeText={password => setpassword(password)} />
                        </View>
                    </View>             
                </View>
            
                <View style={styles.envoyer} >  
                    <View    style={styles.efatra}></View>
                    <View    style={styles.efatrax3}></View>
                    <View    style={styles.efatrax4}></View>
                    <View    style={styles.efatrax5}></View>                   
                </View>
              
                    <TouchableOpacity style={styles.envoyer2} onPress={LOGIN_page}>
                    <Text  style={styles.instext}>Sign In</Text>
                  </TouchableOpacity>
                  <View>
                      <Text>{info_mot_de_pass}</Text>
                  </View>
       
                <View    style={styles.rayx1}></View>
            </View>
            <View    style={styles.ray}></View>
            </View>
            <View>
                <View style={styles.ref} >  
                   <View    style={styles.roa}></View>
                   <View    style={styles.telo}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // css deco//
     ray :{
           backgroundColor :'rgb(255, 195, 0)',
           width :185,
           height :180,
           position :'absolute',
           borderBottomLeftRadius: 40,
           borderBottomRightRadius: 100,
           borderTopLeftRadius: 80,
           borderTopRightRadius: 100,
           top : height/7,
           zIndex :-1 ,
           transform: [{ rotate: '42deg'}]
     },
     rayx1 :{
         // NGEZABE BAHANA//
        backgroundColor :'rgba(206, 0, 0, 0.875)',
        width :705,
        height :210,
        position :'absolute',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 100,
        top : height/80,
        zIndex :-1 ,
        transform: [{ rotate: '42deg'}]
  },
     roa :{
        backgroundColor :'rgb(255, 195, 0)',
        width :35,
        height :80,
        position :'absolute',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 200,
        borderTopLeftRadius: 180,
        borderTopRightRadius: 50,
        left :50,
        transform: [{ rotate: '70deg'}],  
        zIndex :-1
  },
  telo :{
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    width :25,
    height :40,
    position :'absolute',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 200,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 50,
    right :80,
    transform: [{ rotate: '40deg'}],  
    zIndex :-1,
    
},

efatra :{
    // bory-mena akaiky sign//
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    width :80,
    height :80,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    left :-88,
    top : 15,
    transform: [{ rotate: '90deg'}],  
    zIndex :-1,
},
efatrax1 :{
    //tapka-mena-ngeza//
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    width :305,
    height :90,
    position :'absolute',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 200,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 50,
    left :10,
    top : -75,
    transform: [{ rotate: '10deg'}],  
    zIndex :-1,
    
},
efatrax2 :{
     //tapaka-mena-boribory //
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    width :45,
    height :20,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    left :10,
    top : -135,
    transform: [{ rotate: '80deg'}],  
    zIndex :-1,  
},

efatrax3 :{
     //tapaka-boribory //
    backgroundColor :'rgb(255, 195, 0)',
    width :85,
    height :50,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    left :100,
    top : 90,
    transform: [{ rotate: '10deg'}],  
    zIndex :-1, 
},
efatrax4 :{
    //boribory //
    backgroundColor :'rgb(255, 195, 0)',
    width :85,
    height :85,
    position :'absolute',
    borderRadius: 100,
    left :80,
    top : -85,
    transform: [{ rotate: '10deg'}],  
    zIndex :-1, 
},
efatrax5 :{
    //tapaka-mena-boribory //
   backgroundColor :'rgba(206, 0, 0, 0.875)',
   width  :60,
   height :60,
   position :'absolute',
   borderBottomLeftRadius: 100,
   borderBottomRightRadius: 100,
   left :65,
   top : 130,
   transform: [{ rotate: '100deg'}],  
   zIndex :-1,  
},

dimy :{
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    width :15,
    height :15,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    transform: [{ rotate: '80deg'}],  
    bottom :51,
    zIndex :-1,
    right  : 5
},
  parcontainer :{
    height : height,
    width : width,
    backgroundColor :'black',
 
 },
     insccontainer :{
        display :'flex',
        alignItems :'center',
        top :35,
        height : height/2,
        width  :width-40 ,
        top    : 10,
        position :'relative'
      },

    fontwa :{
        color :'white'
    },
 
     insccon :{
        display :'flex',
        alignItems :'center',
        justifyContent :'center',
         backgroundColor :'rgb(255, 195, 0)',
         width :width,
         height :height-10,
         borderBottomLeftRadius: 160,
         borderBottomRightRadius: 0,
         borderTopRightRadius: 0,
         borderTopLeftRadius: 0,
         borderWidth :0.7,
     },
 
     Inscription :{
        top : 0,
        display :'flex',
        flexDirection :'row',
        borderBottomWidth :0.5,
        borderBottomColor : 'white',
     },
     instext:{
         color :'white',    
     },
     instext2:{
        color :'white',
        fontSize : 25
    },
     parinput:{
         top :25,
     },
     inpicon :{
        display : 'flex',
        flexDirection :'row',
        justifyContent :'center',
        alignItems:'center'
     },
     textinput :{
         borderBottomColor : 'white',
         marginBottom : 4,
         borderBottomWidth :1,
         width : width/1.7,
         fontSize :12
     },
     envoyer :{
         top :80,
         padding :10,
         backgroundColor :'rgba(206, 0, 0, 0.875)', 
     },
     envoyer2 :{
        top :80,
        padding :10,
        width  : width/3,
        borderWidth :0.3 ,
        borderRadius :3,
        backgroundColor :'rgba(206, 0, 0, 0.875)',
        display :'flex',
        flexDirection :'row',
        justifyContent :'center',
        alignItems :'center',
        borderWidth :1,
        borderColor : 'white',    
        position :'relative'
    },
    logo :{
        resizeMode :'contain',
        width : width *0.20,
        height  : height *0.18,
        zIndex :2,
        top :-162,
        left :82,
        position :'absolute'
      },

})