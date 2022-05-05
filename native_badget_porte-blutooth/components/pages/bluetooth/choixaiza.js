import React from 'react'
import { View ,Text, TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'


const {width,height} = Dimensions.get('window')  ;
export default function Choixaiza({navigation}) {
  
const listezavatra = [
    {
        id : 1,
        img : require('../../images/commandedigit.png'),
        anarana :'Digital',
        page    : "DIGITAL",
        color   : 'rgba(173, 158, 19, 0.586)'
        //   backgroundColor:'rgba(173, 158, 19, 0.586)',
      },
      {
        id : 1,
        img : require('../../images/commanalog.png'),
        anarana :'Analogique',
        page    : "ANALOGIE",
        color   : 'rgba(173, 158, 19, 0.586)'
      },
      
]

const maplistany = listezavatra.map( (item,index)=>{
    return(
        <View  >
            <TouchableOpacity style={[styles.iziroa ,{backgroundColor :`${item.color}`}] } onPress={()=>navigation.push(item.page)}   >
                <Image source={item.img} style={styles.imagesli2} />
                <Text style={{color:'white',fontSize :17,fontWeight :'bold'}}>{item.anarana}</Text>
            </TouchableOpacity>
        </View>
    )
})
    return (
       <View style={styles.containermap}>
          {maplistany}
       </View>
    )
}
const styles = StyleSheet.create({
    containermap:{

    height :height,
     display :'flex',
     justifyContent :'flex-start',
     alignItems :'center',
     marginBottom :25
    },

    imagesli2:{
        width : width*0.8,
        height : height*0.2,
        resizeMode :'contain',
      },
      iziroa:{
          paddingBottom :20,
          display:'flex',
          justifyContent :'center',
          alignItems :'center',
          backgroundColor :'red',
          padding:15,
          margin:5
      }
})
