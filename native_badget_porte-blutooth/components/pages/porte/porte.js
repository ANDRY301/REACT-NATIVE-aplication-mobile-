import React ,{ useState} from 'react';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList, View ,Text, TouchableOpacity ,StyleSheet,Dimensions,Image, ScrollView} from 'react-native';

const {width,height} = Dimensions.get('window')  ;

const Item = ({id,numporte,sifra, sofa})=> {
    const [couleur,setcouleur]=useState(true);

    const dedakamiova =()=>{
        axios.post('http://localhost:3001/natray/posteportexset', {
            numeporte: id,
            mpanova: sofa
        })
            .then((response) => {
            }).catch((err) => {
                alert(err)
            })
    }
    
    const dedakamiova2 =()=>{
        axios.post('http://localhost:3001/natray/posteportexset', {
            numeporte: id,
            mpanova: sifra
        })
            .then((response) => {
            }).catch((err) => {
                alert(err)
            })
    }

    const miova = () => {
        axios.post('http://localhost:3001/natray/posteportex', {
            numeporte: id,
            mpanova: sofa
        })
            .then((response) => {
                alert(sofa);
                setcouleur(!couleur);
            }).catch((err) => {
                alert(err)
            })
        dedakamiova();
    }

    const miova2 = () => {
        axios.post('http://localhost:3001/natray/posteportex', {
            numeporte: id,
            mpanova: sifra
        })
            .then((response) => {
                alert(sifra);
                setcouleur(!couleur);
            }).catch((err) => {
                alert(err)
            })
     dedakamiova2();
    }

  return (
    <View  style={styles.container}>
        <ScrollView >
          <View style={styles.zanacontainer} >
                  <View style={styles.icontitre} >
                      <FontAwesome5
                          size={40}
                          name={'door-open'} 
                          style={{color :'white'}}
                          />
                          
                      <Text style={{ color: 'white' }}>{numporte}</Text>
                  </View>

              <View style={styles.button_double} >
              <TouchableOpacity
                      onPress={miova2}
                      style={styles.touchable}
                      >
                     
                          <FontAwesome5
                              size={10}
                              name={'lock-open'} 
                              style={{color :'white'}}
                              />
                          <Text style={{color :'white'}} >Ouvert</Text>
                      
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={miova}
                      style={styles.touchable}
                  >
                   
                          <FontAwesome5
                              size={10}
                              name={'lock'}
                              style={{color :'white'}}
                              />
                          <Text  style={{color :'white'}} >Fermer</Text>
                     
                  </TouchableOpacity>         
              </View>

          </View>
      </ScrollView >

    </View>
      
  )
}
//************************************************************ *//
export default function Porte() {

const listeporte = [
    {
        id :1,
        numporte : 'PORTE 1',
        sifra : 1,
        sofa : 2,
    },
    {
        id :2,
        numporte : 'PORTE 2',
        sifra : 3,
        sofa : 4,
    },
    {
        id :3,
        numporte : 'PORTE 3',
        sifra : 5,
        sofa : 6,
    },
    {
        id :4,
        numporte : 'PORTE 4',
        sifra : 7,
        sofa : 8,
    },
    {
        id :5,
        numporte : 'PORTE 5',
        sifra : 9,
        sofa :  "a",
    },
    {
        id :6,
        numporte : 'PORTE 6',
        sifra : 6,
        sofa : 16,
    },
];

  return (   
    <View  style = {{flex:1}}>
     <FlatList 
         showsVerticalScrollIndicator={false}
         keyExtractor={(item) => item.id}
         data={listeporte}
         renderItem={({ item, index}) => (
           <Item 
           {...item}
            index={index}      
            />     
         )}
     />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display :'flex',
        alignItems :'center',
        backgroundColor:'black',
    },
    zanacontainer :{
    width   : width/1.3,
    display :'flex',
    flexDirection :'row',
    justifyContent :'space-around',
    alignItems :'center',
    margin  :5,
    borderBottomWidth :0.8,
    borderRadius :3,

    borderColor: 'white'
    },
    icontitre:{
        display :'flex',
        alignItems :'center'
    },
    button_double :{
        margin  :5
    },
    touchable:{
        display :'flex',
        flexDirection :'row',
        width   : width /2.5,
        justifyContent :'space-around',
        alignItems:'center',
        padding :10,
        margin  :3,
        borderWidth :0.7,
        borderRadius : 3,
   
        backgroundColor :'rgba(199, 0, 0, 0.973)'
    }
})

