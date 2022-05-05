import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Zokiny          from './zokiny';
import Liste           from './pages/Liste/liste';
import Present         from './pages/present/present';
import Absent          from './pages/Absent/absent';
import Liste2          from './pages/Liste/liste2';

import Inscription     from './pages/inscription/Lnscrptionliste/inscriptionliste';
import Presentation    from './pages/presentation/presentation';
import Contact         from './pages/contact/contact';
import Urgence         from './pages/urgence/urgence';
import Code_du_travail from './pages/code_du_travail/code_du_travail';
import Porte           from './pages/porte/porte';
import Reception       from './pages/bluetooth/reception';
import Body            from './pages/bluetooth/body';
import Blulohany       from './pages/bluetooth/blulohany';


const {Navigator,Screen} = createNativeStackNavigator();

export default function Vatany() {

  return (

    <Navigator>
      <Screen name="Gmao-AND" component={Zokiny}
        options={{ title: "IOT-BADGET", headerTitleAlign: 'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen name="liste2" component={Liste2}
        options={{ title: "LISTE", headerTitleAlign:       'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen name="liste" component={Liste}
        options={{ title: "INFORMATION", headerTitleAlign:  'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen name="present" component={Present} 
        options={{ title: "PRESENT", headerTitleAlign:     'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen name="absent" component={Absent}
        options={{ title: "ABSENT", headerTitleAlign:      'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>
              <Screen name="contact" component={Contact}
        options={{ title: "CONTACT", headerTitleAlign:     'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen name="inscription" component={Inscription}
        options={{ title: "INSCRIPTION", headerTitleAlign: 'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen name="urgence" component={Urgence} 
        options={{ title: "URGENCE", headerTitleAlign:      'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen name="presentation" component={Presentation}
        options={{ title: "PRESENTATION", headerTitleAlign:'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>
        
        <Screen name="code_du_travail" component={Code_du_travail}
        options={{ title: "Code du travail", headerTitleAlign:'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

       <Screen name="porte" component={Porte}
        options={{ title: "PORTE", headerTitleAlign:'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>

      <Screen  name="blulohany"  component={Blulohany} 

      options={{ title: "blulohany", headerTitleAlign:'center', headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white' }}/>
                      
      <Screen  name="ANALOGIE"   component={Reception}             
      options={{headerStyle: { backgroundColor: 'rgb(255, 195, 0)' },headerTintColor: 'white',}}
                />
      <Screen  name="DIGITAL"    component={Body} 
      options={{headerStyle: { backgroundColor: 'rgb(255, 195, 0)' }, headerTintColor: 'white',} }/>

    </Navigator>

  )
}
