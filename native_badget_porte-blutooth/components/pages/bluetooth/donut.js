import * as React from 'react';
import {
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import Svg, { G, Circle, Rect } from 'react-native-svg';
const {width,height} = Dimensions.get('window')  ;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Donut({
  percentage = 75,
  radius = 30,
  strokeWidth = 2,
  nom ='',
  col=''
}) {

  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;


  return (
  
        <View style={styles.contairedonut}>
     <View style={styles.roabase}>
     <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G
          rotation="270"
          origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
           
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={col}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={percentage-190}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={col}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
      
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={`${percentage}`}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: col },
          styles.text,
        ]}
      />
    </View>
     </View>
     
        <View>
              <Text style={styles.roabase}>{nom}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

    contairedonut:{
          display:'flex',
          flexDirection:'row',
          borderWidth  : 0.3,
          borderRadius : 3,
          justifyContent:'space-between',
          alignItems:'center',
          width : width*0.8   ,
          margin :5,  
    },
    roabase :{
      padding : 10,
      fontWeight:'bold',
      fontSize : 14,
      color :'black'
      
    },
  text: { fontWeight: '900', textAlign: 'center' },

});
