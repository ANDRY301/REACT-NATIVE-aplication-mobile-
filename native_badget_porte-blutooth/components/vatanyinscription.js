import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Zokinyinscription from './zokinyinscription';
import Inscriptionliste  from './pages/inscription/Lnscrptionliste/inscriptionliste';
import Inscricontact     from './pages/inscription/Inscricontacte/inscricontact';
import Numerourgence     from './pages/inscription/numerourgence/numerourgence';
import Code_du_travail   from './pages/code_du_travail/code_du_travail';


const {Navigator,Screen} = createNativeStackNavigator();

export default function Vatanyinscription () {

  return (

    <Navigator>
      <Screen name="Carte" component={Zokinyinscription}
        options={{ title: "INSCRIPTION", headerTitleAlign: 'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>
      <Screen name="code_du_Travail" component={Code_du_travail} 
        options={{ title: "Code du Travail", headerTitleAlign:      'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>
      <Screen name="inscriptionliste" component={Inscriptionliste}
        options={{ title: "LISTE", headerTitleAlign: 'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>
      <Screen name="inscri_contact" component={Inscricontact}
        options={{ title: "CONTACT", headerTitleAlign:     'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>   
      <Screen name="inscri_urgence" component={Numerourgence} 
        options={{ title: "URGENCE", headerTitleAlign:      'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>
    </Navigator>

  )
}
