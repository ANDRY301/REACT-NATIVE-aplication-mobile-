import React from 'react';
import {FlatList,StyleSheet, View,Dimensions} from 'react-native';
import BodyPf from './bodyPf';

const {width,height} = Dimensions.get('window')  ;

export default function Body() {

    const listecommande = [
        {
            id :1,
            lettre_oui : "T",
            lettre_non :"a",
            sary1  : require('../../images/empouleno.png'),
            sary2  : require('../../images/empouleok.png')
        },
        {
            id :2,
            lettre_oui : "B",
            lettre_non :"b",
            sary1  : require('../../images/empouleno.png'),
            sary2  : require('../../images/empouleok.png')   
        },
        {
            id :3,
            lettre_oui :"C",
            lettre_non :"c",
            sary1  : require('../../images/moteur.png'),
            sary2  : require('../../images/moteur2.png')     
        },

        {
            id :4,
            lettre_oui :"D",
            lettre_non :"d",
            sary1  : require('../../images/moteur.png'),
            sary2  : require('../../images/moteur2.png')     
        },
        {
            id :5,
            lettre_oui :"E",
            lettre_non :"e",
            sary1  : require('../../images/frigo.png'),
            sary2  : require('../../images/frigo2.png')    
        },
        {
            id :6,
            lettre_oui :"F",
            lettre_non :"f",
            sary1  : require('../../images/frigo.png'),
            sary2  : require('../../images/frigo2.png')   
        },

        {
            id :7,
            lettre_oui :"G",
            lettre_non :"g",
            sary1  : require('../../images/robinet.png'),
            sary2  : require('../../images/robinet2.png')  
        },
        {
            id :8,
            lettre_oui :"H",
            lettre_non :"h",
            sary1  : require('../../images/robinet.png'),
            sary2  : require('../../images/robinet2.png')         
        },

    ];
    
    return ( 
        <View  style={styles.containebody}>
                 <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={listecommande}
                renderItem={({ item, index }) => (
                    <BodyPf {...item} index={index}/>
                )}
            />    
        </View>
       
    )
}

const styles = StyleSheet.create({
    containebody:{
        backgroundColor :'rgba(173, 158, 19, 0.586)',
        display :'flex',
        justifyContent :'center',
        alignItems:'center',
        height:'100%'
    }
})