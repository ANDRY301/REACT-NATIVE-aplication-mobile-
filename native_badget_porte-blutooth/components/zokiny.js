import React, { useRef,useContext } from 'react'
import { FlatList, View ,Text ,StyleSheet, TouchableOpacity ,Animated,Dimensions,} from 'react-native';
import FontAwesome5                 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage                 from '@react-native-async-storage/async-storage';
import { AuthConte }                from './pages/heaauth/autfront'; 
import {InfoIcon,InfoIcon2}         from './listezokiny'


const {width,height}  = Dimensions.get('window') ;

const DOT_SIZE = 22;

const Pagination = ({ scrollX }) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });

  return (
    <View style={styles.pagination}>
       <View  style={styles.ensembtrano}>
       <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            // backgroundColor: 'red',
            transform: [{ translateX }],
          },
        ]}
      />

       {InfoIcon.map((item ,index) => {
        return (
          <View key={index}  >
            <View
              style={[styles.zanabu, { backgroundColor: item.color }]}
            />
          </View>
        );
      })}
       </View>
    </View>
  );
};

const Item = ({anarana,page,navigation,img,index,scrollX})=> {

  // deplacement axe X  image 
  const inputRange =[(index-1)*width ,index*width,(index+1)*width];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange : [0,1,0]
  })
  
  // Deplacement TEXT en bas images
  const translateXHeading = scrollX.interpolate({
    inputRange ,
    outputRange :[width * 0.2 ,0 ,-width*0.2]
  })

  // opacite de text  different  inputRange : inputRangeOpacity, respecter opacity si non 
const inputRangeOpacity = [(index-0.3)*width,(index*width),(index+0.3)*width] ;

 const opacity = scrollX.interpolate({
  inputRange : inputRangeOpacity,
  outputRange : [0,1,0]
 })

  return (
    <View  key={index}>
      <TouchableOpacity
        onPress={() => navigation.push(page)}
      >
        <View style={styles.itemcontainer}>

          <View >
            <Animated.Image source={img} style={[styles.itemimg,
            {
              transform :[{scale}]
            }]} />
          </View>
          <View>
            <Animated.Text style={[styles.itemtext ,{
             opacity,
              transform : [{translateX : translateXHeading}]
            }
            ]}>{anarana}</Animated.Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const Item2 = ({anarana,page,navigation,index,icon})=> {

  return (
    <View key ={index}  >
    <TouchableOpacity
      onPress={() => navigation.push(page)}
    >
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

export default function Zokiny ({navigation}) {

const {setstateAuth} = useContext(AuthConte)

const Deconnection=()=>{
  AsyncStorage.removeItem('accessToken') ;
  setstateAuth({matricule:'',id:0,status:false})

}

  const scrollX  = useRef(new Animated.Value(0)).current ;
  const scrollY  = useRef( new Animated.Value(0)).current ;
  
  return (
    <View style={{ flex: 1 ,backgroundColor :'black'}}>
      <View style={styles.fontwa1}>
        <Text style={styles.text_logout}  > Logout   </Text>
        <FontAwesome5 name={'sign-out-alt'} solid size={13} style={styles.fontwa2} onPress={Deconnection} />
      </View>
      <View >
        <Pagination scrollX={scrollX} />
      </View>
    <Animated.FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    onScroll={Animated.event(
      [{nativeEvent :{contentOffset :{x:scrollX}}}],
    
      {useNativeDriver : true}
    )}
    scrollEventThottle={16}
      keyExtractor={(item) => item.id}
      data={InfoIcon}
      renderItem={({ item, index }) => (
        <Item {...item} index={index} scrollX={scrollX} navigation={navigation} />
      )}
    />
     
    <View   style ={styles.item2container}>
    <FlatList
      keyExtractor={(item) => item.id}  
      showsVerticalScrollIndicator={false}
      data={InfoIcon2}
      renderItem={({ item, index }) => (
        <Item2 {...item} index={index} scrollY={scrollY} navigation={navigation}  />
      )}      
    />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  fontwa1 :{
  flexDirection :'row',
  width : width,
  top :5,
  display :'flex',
  justifyContent :'flex-end',
  alignItems:'center',
  padding :5,
  borderRadius :5
    
},
fontwa2 :{
  color :'rgb(255, 195, 0)',
  marginRight :10
  
},

text_logout:{
  color :'white'

},
  pagination :{
    height : 40,
    display :'flex',
    justifyContent :'center',
    alignItems :'center',
    padding :10
    
  },
  zanabu :{
    height :17,
    width  :16,
    margin :3,
    borderRadius :100,
  },
  ensembtrano:{
    display :'flex',
    flexDirection :'row',    
   
  },

  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 1.5,
    borderColor: 'white',
    marginTop :2,

 
  },
item2container :{
  height : height*0.375,
  display :'flex',
  justifyContent:'center',
  alignItems :'center',
  top : 15,
  marginBottom :15

  },
 touchcontainer2 : {
    display : 'flex',
    flexDirection :'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth: 0.5,
    width :width*0.8,
    margin :5,
    borderRadius :1,
    backgroundColor :'rgba(206, 0, 0, 0.875)',
    borderColor : 'white',
  },
  imagesli2:{
    width : 50,
    height : 50,
    resizeMode :'contain',
    marginLeft :10,
 
  },
  anarana2:{
    marginRight :15,
    fontSize:13,
    color :'white'
  },
  
  itemcontainer :{
    width :width,
    display : 'flex',
    alignItems :'center',
    top :0,
    height : '100%',
    
  },
  itemimg :{
    resizeMode :'contain',
    width : width *0.5,
    height  : height *0.18,
  
  },
  itemtext : {
   fontSize:18,
   color:'white',
  },
})