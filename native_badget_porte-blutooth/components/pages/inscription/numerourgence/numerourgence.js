import React ,{useState,useContext}from 'react';
import { View ,Text, TextInput,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { AuthConte } from '../../heaauth/autfront';


const {width,height}= Dimensions.get('window');

export default function Numerourgence() {

const {stateAuth} = useContext(AuthConte) ; 
//ajout teste
const [nom,setNom]       =useState('');
const [tel,setTel]       =useState('');
const [mail,setMail]     =useState('');

const handlesubmit =()=>{
    axios.post("http://localhost:3001/iot/inscription_urgence",{
        nom          : nom,
        tel          : tel ,
        mail         : mail,
        matricule    : stateAuth.matricule

    }).then( (response)=>{
        setNom    ('') ;
        setTel    ('') ;
        setMail   ('') ;
        console.log("lasa")
    })
 
}
    return (
        <View style={styles.parcontainer}>
            <View style={styles.insccontainer}>
            <View    style={styles.rayx1}></View>
                <View style={styles.Inscription} >
                <View    style={styles.sivy}></View>
                    <Text style={styles.instext}>Urgence</Text> 
                </View>
                <View style={styles.parinput}>
                <View    style={styles.valo}></View>
                    <View style={styles.inpicon}>
                        <Text>  <FontAwesome5 name={'user'} solid size={12} style={styles.fontwa} />   </Text>
                        <TextInput style={styles.textinput} placeholder="Nom" defaultValue={nom} onChangeText={nom => setNom(nom)} placeholderTextColor="rgba(255, 255, 255, 0.301)" />
                    </View>

                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'mobile-alt'} solid size={12} style={styles.fontwa} />   </Text>
                            <TextInput style={styles.textinput} placeholder="Telephone" defaultValue={tel} onChangeText={tel => setTel(tel)} placeholderTextColor="rgba(255, 255, 255, 0.301)" />
                        </View>
                    </View>
          
                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'envelope'} solid size={12} style={styles.fontwa}/>   </Text>
                            <TextInput style={styles.textinput} placeholder="Mail" defaultValue={mail} onChangeText={mail => setMail(mail)}  placeholderTextColor="rgba(255, 255, 255, 0.301)"/>
                        </View>

                    </View>
               
                </View>

                <View >
                    <TouchableOpacity style={styles.envoyer} onPress={handlesubmit}>
                        <Text style={styles.instext2}>Envoyer</Text>
                        <Text> <FontAwesome5 name={'paper-plane'} solid size={12} style={styles.fontwa} /> </Text>
                    </TouchableOpacity>
                    <View    style={styles.enina}></View>
                    <View    style={styles.ray}></View>
                    <View    style={styles.fitox2}></View>
                    <View    style={styles.fitox3}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

        // deco//

        rayx1:{
            // ambany mena//
            backgroundColor :'rgba(206, 0, 0, 0.875)',
            width :705,
            height :230,
            position :'absolute',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 100,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 100,
            top : height/10,
            zIndex :-1 ,
            transform: [{ rotate: '52deg'}]
        },
      
        ray :{

            // boribory vony ambany //
            backgroundColor :'rgb(255, 195, 0)',
            width :75,
            height :75,
            position :'absolute',   
            borderRadius: 100,
            top : height/8,
            right: 88,
            zIndex :-1 ,
            transform: [{ rotate: '100deg'}]
      },
      
    
    
    enina :{
        backgroundColor :'rgb(255, 195, 0)',
        width :25,
        height :25,
        position :'absolute',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        transform: [{ rotate: '80deg'}],  
        bottom :51,
        zIndex :-1,
        right  : 65
        
    },
    fito :{
        backgroundColor :'rgb(255, 195, 0)',
        width :18,
        height :15,
        position :'absolute',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        transform: [{ rotate: '80deg'}],  
        bottom :121,
        zIndex :-1,
        left  : 5
        
    },
    fitox2 :{
        /*/ ambany-mena-tsy hita/*/
        backgroundColor :'rgba(206, 0, 0, 0.875)',
        width :90,
        height :90,
        position :'absolute',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        transform: [{ rotate: '80deg'}],  
        bottom :-252,
        zIndex :-1,
        left  : -55
        
    },
    fitox3 :{
        /*/ ambany-mena-tsy hita/*/
        backgroundColor :'rgb(255, 195, 0)',
        width :86,
        height :86,
        position :'absolute',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        transform: [{ rotate: '80deg'}],  
        bottom :-180,
        zIndex :-1,
        left  : 95
        
    },
      /*/ findeco/*/

        parcontainer :{
            display :'flex',
            alignItems :'center',
            justifyContent :'center',
            height : height,
            width : width,
            backgroundColor :'black'    
         },

    valo :{
        backgroundColor :'black',
        width :25,
        height :25,
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
    sivy :{
        backgroundColor :'rgb(255, 195, 0)',
        width :25,
        height :25,
        position :'absolute',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        transform: [{ rotate: '80deg'}],  
        bottom :-51,
        zIndex :-1,
        right  : 5
        
    },
    fontwa :{
        color :'white'
    },
    parcontainer :{
        display :'flex',
        alignItems :'center',
        height : height,
        width : width,
        backgroundColor :'black'
     },
     insccontainer :{
       display :'flex',
       alignItems :'center',
       top :15,
       height : height,
       width  :width-40 ,

     },
     Inscription :{
        top : 15,
        display :'flex',
        flexDirection :'row',
        borderBottomWidth :0.5,
        borderBottomColor :'white'
     },
     instext:{
         color :'white',
         fontSize:25
     },
     instext2:{
        color :'white'
    },
     parinput:{
         top :25
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
         color :'white'
     },
     envoyer :{
        top :50,
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
     
     }
})