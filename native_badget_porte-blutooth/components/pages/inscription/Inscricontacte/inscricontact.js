import React ,{useState,useContext}from 'react';
import { View ,Text, TextInput,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { AuthConte } from '../../heaauth/autfront';


const {width,height}= Dimensions.get('window');

export default function Inscricontact() {
const {stateAuth} = useContext(AuthConte) ; 
//ajout teste
const [nom,setNom]       = useState('');
const [prenom,setPrenom] = useState('');
const [tel,setTel]       = useState('');
const [mail,setmail]       = useState('');

const handlesubmit =()=>{
    axios.post("http://localhost:3001/iot/inscription_contact",{
        nom          : nom,
        prenom       : prenom,
        tel          : tel ,
        mail         : mail,
        matricule    : stateAuth.matricule

    }).then( (response)=>{
        setNom    ('') ;
        setPrenom ('') ;
        setTel    ('') ;
        setmail    ('')
        console.log("lasa")
    })
 
}
    return (
        <View style={styles.parcontainer}>
            <View style={styles.insccontainer}>
            <View    style={styles.ray}></View>
                <View style={styles.Inscription} >
                <View    style={styles.fito}></View>
                    <Text style={styles.instext}>Contact</Text>
                </View>
                <View style={styles.parinput}>
                    <View style={styles.inpicon}>
                        <Text>  <FontAwesome5 name={'user'} solid size={12} style={styles.fontwa} />   </Text>
                        <TextInput style={styles.textinput} placeholder="Nom" defaultValue={nom} onChangeText={nom => setNom(nom)}  placeholderTextColor="rgba(255, 255, 255, 0.301)"/>
                    </View>
                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'user-tie'} solid size={12} style={styles.fontwa} />   </Text>
                            <TextInput style={styles.textinput} placeholder="Prenom" defaultValue={prenom} onChangeText={prenom => setPrenom(prenom)}  placeholderTextColor="rgba(255, 255, 255, 0.301)"/>
                        </View>


                    </View>
                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'mobile-alt'} solid size={12} style={styles.fontwa} />   </Text>
                            <TextInput style={styles.textinput} placeholder="Telephone" defaultValue={tel} onChangeText={tel => setTel(tel)}  placeholderTextColor="rgba(255, 255, 255, 0.301)" />
                        </View>
                    </View>
                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'mobile-alt'} solid size={12} style={styles.fontwa} />   </Text>
                            <TextInput style={styles.textinput} placeholder="mail" defaultValue={mail} onChangeText={mail => setmail(mail)}  placeholderTextColor="rgba(255, 255, 255, 0.301)" />
                        </View>
                    </View>

                </View>

                <View >
                <View    style={styles.enina}></View>
                     <TouchableOpacity style={styles.envoyer} onPress={handlesubmit}>
                     <Text style={styles.instext2}>Envoyer</Text>
                     <Text>  <FontAwesome5 name={'paper-plane'} solid size={12} style={styles.fontwa} /> </Text>

                     </TouchableOpacity>                 
                    <View    style={styles.rayx1}></View>
                    <View    style={styles.fitox2}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // deco//
    ray :{
        // mena mibahana//
        backgroundColor :'rgba(206, 0, 0, 0.875)',
        width :705,
        height :260,
        position :'absolute',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 100,
        top : height/90,
        zIndex :-1 ,
        transform: [{ rotate: '42deg'}]
  },
   rayx1:{
       // ambany mena//
       backgroundColor :'rgb(255, 195, 0)',
       width :80,
       height :80,
       position :'absolute',   
       borderRadius: 100,
       top : height/-108,
       right: 98,
       left :-100,
       zIndex :-1 ,
       transform: [{ rotate: '100deg'}]
   },
  
enina :{
    //boribory ambany//
    backgroundColor :'rgb(255, 195, 0)',
    width :45,
    height :45,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    transform: [{ rotate: '80deg'}],  
    bottom :90,
    zIndex :-1,
    right  : -95
    
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
    bottom :51,
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
    bottom :-182,
    zIndex :-1,
    left  : 105
    
},
  /*/ findeco/*/
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
       justifyContent :'center',
       top :35,
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
         fontSize : 25     
     },
     instext2:{
        color :'white',
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