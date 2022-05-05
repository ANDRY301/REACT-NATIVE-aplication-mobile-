import React from 'react';
import { View ,Text,StyleSheet,Dimensions,ScrollView} from 'react-native';

const {width,height}= Dimensions.get('window');

export default function Presentation() {
    return (
        <View style={styles.containerpresent}>
            <View style={styles.tambatra}>

                <View style={styles.titre}>
                    <Text style={styles.titreprese}>Presentation</Text>
                </View>

                <View>
                    <View style={styles.rayx1}></View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.articlep}>
                        Le badge RFID a été développé par Andry Randriambelo, en
                        collaboration avec Germain Bueke. Confrontés à un manque d'offre ou à des propositions trop coûteuses,
                        ils ont décidé de créer le badge RFID .
                        Cette application permet d'avoir une connaissance en temps réel des ouvertures et des fermetures des portes de votre structure.
                        Alors la sécurité et le bon fonctionnement des locaux sont garanties.
                        Les badges nominatifs sont un atout pour identifier les présents et les absents, ainsi en cas d'urgence - incendie, etc. - les présents dans les locaux seront lister.
                        Un onglet dédié rend accessibles les principaux articles de la loi du travail qui sont susceptibles d'être utiles au quotidien.
                    </Text>

                    <View>
                        <View style={styles.fintextde} ></View>
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    fintextde :{
        margin :5,
        padding :100
      },
    containerpresent :{
            height: height,
            backgroundColor :'black',
            display         :'flex',
            alignItems  :'center',
    },
    titre :{
      display:'flex',
      justifyContent :'center',
      alignItems:'center',
      padding :9
    },
    titreprese:{
      fontSize :30,
      color :'white'
    },
    tambatra : {
        top:30,
        padding :15,
        width : width-30,
        display:'flex',
        justifyContent :'center',
    },
    articlep :{
       fontSize : 15,
       color :'white',
       flexShrink: 1
    },
    rayx1 :{
        // NGEZABE BAHANA//
       backgroundColor :'rgba(206, 0, 0, 0.875)',
       width :705,
       height :210,
       position :'absolute',
       borderBottomLeftRadius: 40,
       borderBottomRightRadius: 100,
       borderTopLeftRadius: 80,
       borderTopRightRadius: 100,
       top : height/12,
       right :-205,
       zIndex :-1 ,
       transform: [{ rotate: '42deg'}]
 },
})