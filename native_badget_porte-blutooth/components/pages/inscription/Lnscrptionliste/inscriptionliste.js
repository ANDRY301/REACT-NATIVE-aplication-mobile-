import React ,{useState,useEffect,useContext}from 'react';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View ,Text, TextInput,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import { AuthConte } from '../../heaauth/autfront'; 


const {width,height}= Dimensions.get('window');

export default function Inscriptionliste({navigation}) {

const {stateAuth} = useContext(AuthConte) ; 

const [scann,setScann]=useState([])


//ajout teste
const [nom,setNom]       = useState('');
const [prenom,setPrenom] = useState('');
const [tel,setTel]       = useState('');
const [numero,setNumero] = useState('');


const handlesubmit =()=>{
    axios.post("http://localhost:3001/iot/inscription_badget",{
        nom                : nom,
        prenom             : prenom,
        numero_status      : numero,
        tel                : tel ,
        matricule          : stateAuth.matricule
    }).then( (response)=>{
        setNom    ('') ;
        navigation.navigate({name : 'liste'}) ;
        console.log("lasa")
        console.log(response.data)
    }).catch( (err)=>{
        console.log(err)
    })
}

useEffect( ()=>{
    axios.get('http://localhost:3001/natray/liste_badget_scann')
    .then( (response)=>{
        setScann(response.data[0].numero) 
        console.log(scann)
    })
})

    return (
        <View style={styles.parcontainer}>
            <View style={styles.insccontainer}>
            <View    style={styles.ray}></View>
                <View style={styles.Inscription} >

                    <Text style={styles.instext}>Scann</Text>
                    <View    style={styles.fito}></View>
                    <Text style={styles.instext}> : {scann}</Text>
                </View>
                <View style={styles.parinput}>
                    <View style={styles.inpicon}>
                        <Text>  <FontAwesome5 name={'user'} solid size={12} style={styles.fontwa} />   </Text>
                        <TextInput style={styles.textinput} placeholder="Nom" Value={nom} onChangeText={nom => setNom(nom)} placeholderTextColor="rgba(255, 255, 255, 0.301)"/>
                    </View>
                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'user-tie'} solid size={12}  style={styles.fontwa}/>   </Text>
                            <TextInput style={styles.textinput} placeholder="Prenom" Value={prenom} onChangeText={prenom => setPrenom(prenom)} placeholderTextColor="rgba(255, 255, 255, 0.301)"/>
                        </View>
                    </View>
                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'sort-amount-down'} solid size={12} style={styles.fontwa} />   </Text>
                            <TextInput style={styles.textinput} placeholder="Numero badget" Value={numero} onChangeText={numero => setNumero(numero)} placeholderTextColor="rgba(255, 255, 255, 0.301)" />
                        </View>

                    </View>
                    <View>
                        <View style={styles.inpicon}>
                            <Text>  <FontAwesome5 name={'mobile-alt'} solid size={12} style={styles.fontwa}/>   </Text>
                            <TextInput style={styles.textinput} placeholder="Telephone" Value={tel} onChangeText={tel => setTel(tel)} placeholderTextColor="rgba(255, 255, 255, 0.301)" />
                        </View>
                    </View>
                </View>
  
                <View >
                <View    style={styles.fitox1}></View>
                    <TouchableOpacity style={styles.envoyer} onPress={handlesubmit} >
                        <Text style={styles.instext}>Envoyer</Text>
                        <Text>  <FontAwesome5 name={'paper-plane'} solid size={12} style={styles.fontwa}/> </Text>
                    </TouchableOpacity>
                    <View    style={styles.enina}></View>
                   
                    <View    style={styles.fitox2}></View>
                    <View    style={styles.fitox3}></View>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ray :{
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
  rayx1 :{
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    width :275,
    height :260,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 180,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 150,
    top : height/100,
    zIndex :-1 ,
    transform: [{ rotate: '110deg'}]
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
    right  : 5
    
},
fito :{
    backgroundColor :'rgb(255, 195, 0)',
    width :18,
    height :18,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    transform: [{ rotate: '80deg'}],  
    bottom :-22,
    zIndex :-1,
    left  : 5
},

fitox1 :{
    backgroundColor :'rgb(255, 195, 0)',
    width :70,
    height :70,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    transform: [{ rotate: '80deg'}],  
    bottom :-22,
    zIndex :-1,
    left  : -85
    
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
    bottom :-152,
    zIndex :-1,
    left  : -55
    
},
fitox3 :{
    /*/ ambany-vony-tsy hita/*/
    backgroundColor :'rgb(255, 195, 0)',
    width :110,
    height :110,
    position :'absolute',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    transform: [{ rotate: '80deg'}],  
    bottom :-232,
    zIndex :-1,
    left  : 95
    
},
  /*/ findeco/*/
    fontwa :{
        color :'white'
    },
    parcontainer :{
        display :'flex',
        alignItems :'center',
        justifyContent :'center',
        height : height,
        width : width,
        backgroundColor :'black'    
     },
 
     insccontainer :{
       display :'flex',
       alignItems :'center',
       top :height/20,
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