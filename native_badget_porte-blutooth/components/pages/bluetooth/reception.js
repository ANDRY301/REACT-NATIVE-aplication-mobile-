import React, { useState ,useEffect} from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { View ,StyleSheet,StatusBar,ScrollView} from 'react-native';
import Donut from './donut'

export default function Reception() {

const [info,setinfo]=useState(''); 
    
const data = [{
   percentage: `${info}`,
   color: 'gold',
   nom : "CO2",
  col :'black'
 },
 {
    percentage: '20',
    color: '#222',
    nom : "Temeprature",
   col :'black'
  }
  ,
 {
    percentage: '24',
    color: 'skyblue',
    nom : "Pression",
   col :'black'
  },
  {
    percentage: '43',
    color: 'rgba(173, 158, 19, 0.586)',
    nom : "Humidité",
   col :'black'
  },
  {
     percentage: 10,
     color: 'rgba(173, 158, 19, 0.586)',
     nom : "Pression",
     col :'black'
   }
   ,
   {
     percentage:'58',
     color: 'rgba(173, 158, 19, 0.586)',
     nom : "Humidité",
    col :'black'
   },
   {
      percentage: 10,
      color: 'rgba(173, 158, 19, 0.586)',
      nom : "Pression",
      col :'black'
    }
    ,
]
 

   useEffect( ()=>{
      BluetoothSerial.read((data, subscription) => {
          console.log(data);
          setinfo(data)
        }, "\r\n");
   })

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      >
      {data.map((p, i) => {
          return <Donut 
          key={i} percentage={p.percentage} color={p.color} 
          delay={500 + 100 * i} max={p.max} nom = {p.nom}
          col={p.col}
          />
        })}

      </ScrollView>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display :'flex',
    justifyContent :'center',
    alignItems :'center',
    backgroundColor:'rgba(173, 158, 19, 0.586)',
    height:'100%'
  },

});
