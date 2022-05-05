import React from 'react'
import { View ,Text,StyleSheet,Dimensions} from 'react-native'

const {width,height}= Dimensions.get('window');

export default function Pfcode_du_travail({
    titre    ='',
    loi      ='',
    article  ='',
    index    =''
}) {
    return (
        <View key={index}>
            <View >
                <Text style={styles.article}>{article}</Text>
            </View>
            <View style={styles.lohany}>

                <View style={styles.texttitre1}>
                    <Text style={styles.texttitre}> Theme : {titre} </Text>
                </View>
                <Text style={{ color: 'white' }}> - Article :{loi}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create( {
    lohany :{
       display:'flex',
       flexDirection :'row',
       justifyContent :'space-between',
       padding :5,
       flexDirection :'column',
       borderWidth: 0.7,
       borderColor:'white',
       position : 'relative'
    },
    texttitre:{
        fontWeight :'bold',
        color :'white',  
    },

    texttitre1:{
        fontWeight :'bold',
        color :'white',
        backgroundColor :'rgba(206, 0, 0, 0.875)',
        display :'flex',
        flexDirection :'row',
        justifyContent :'center',
        alignItems :'center'
    },
    article :{
        padding :5,
        color :'white',
        width : width -50
    },
})