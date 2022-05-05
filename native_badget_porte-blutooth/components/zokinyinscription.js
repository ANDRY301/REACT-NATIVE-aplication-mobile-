import React, { useRef } from 'react'
import FontAwesome5      from 'react-native-vector-icons/FontAwesome5';
import { Data_liste }    from './listezokiny2';
import { FlatList, View ,Text ,StyleSheet, TouchableOpacity,Animated, Dimensions} from 'react-native';
const {width,height}  = Dimensions.get('window') ;

const Item2 = ({anarana,page,navigation,index,icon})=> {
  return (
    <View  key={index}>
    <TouchableOpacity onPress={() => navigation.push(page)}>
      <View style={styles.touchcontainer2}>
        <FontAwesome5
          size={25}
          name={icon}
          style={{color:'white',   marginLeft :15, padding :15}}                     
          />
        <Text style={styles.anarana2}>{anarana}</Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}
export default function Zokinyinscription ({navigation}) {
  const scrollY  = useRef( new Animated.Value(0)).current ;  
  
  return (
    <View style={{ flex: 1 ,backgroundColor :'black'}}>
    <View   style ={styles.item2container}>
    <FlatList
      keyExtractor={(item) => item.id}  
      showsVerticalScrollIndicator={false}
      data={Data_liste}
      renderItem={({ item, index }) => (
        <Item2 {...item} index={index} scrollY={scrollY} navigation={navigation}  />
      )}    
    />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({

item2container :{
  height : height,
  display :'flex',
  justifyContent:'center',
  alignItems :'center',
  top :25
  },
  touchcontainer2 : {
    display : 'flex',
    flexDirection :'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth: 0.7,
    width :width*0.8,
    margin :15,
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    borderColor : 'white',
    borderRadius :1,
    padding  :15,
  },
  imagesli2:{
    width : 50,
    height : 50,
    resizeMode :'contain',
    marginLeft :10,
  },
  anarana2:{
    marginRight :15,
    fontSize:15,
    color :'white',
  },
  itemcontainer :{
    height : height/2.7,
    width :width,
    display : 'flex',
    justifyContent :'center',
    alignItems :'center',
  },
  itemimg :{
    resizeMode :'contain',
    width : width *0.7,
    height  : height *0.3,
  },
  itemtext : {
   fontSize:18,
   color:'white',
  },
})