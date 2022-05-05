
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabvatany from './components/tabvatany'
import Load from './components/pages/debut/load';
import {AuthConte} from './components/pages/heaauth/autfront'
import Log from './components/pages/debut/log';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loga from './components/pages/logine/loga';

export default function App() {

const [isLoading,setIsLoading]=useState(true) ;
const [stateAuth,setstateAuth]=useState({matricule :"",id:0,status:false}) ;

 const [auth, setAuthState] = useState(null);

useEffect( ()=>{
  setTimeout( ()=>{
    setIsLoading(!isLoading)
  },2000)
},[])

useEffect( ()=>{
  axios.get("http://localhost:3001/badget/users/auth",{
      headers:{accessToken:AsyncStorage.getItem("accessToken")}
      
  })
  .then( (response)=>{
   //console.log(response.data)
   /*/
      if(response.data.error){
          setstateAuth({matricule:'',id:0,status:false})
      }else{
          setstateAuth({
        matricule:response.data.matricule,
        id       : response.data.id ,
        status   :true        
    })}
    /*/
  })
},[])

const getAuthState = async () => {
  try {
    const authDataString = await AsyncStorage.getItem("accessToken");
    const authData = JSON.parse(authDataString || {});
    // Configure axios headers
    console.log(authData)
    configureAxiosHeaders(authData.token, authData.phone);
    setAuthState(authData);
  } catch (err) {
    setAuthState({});
  }
};

useEffect(() => {
  getAuthState();
}, []);


//MBOLA TSY CONFIMRE RAHA DELETE
//https://stackoverflow.com/questions/39909593/react-native-how-to-remove-token-with-asyncstorage-with-jwt
//lien interresant
//https://www.bigbinary.com/blog/handling-authentication-state-in-react-native

if(isLoading){
  return( 
    <Log/>
  )
}
  return (
    <AuthConte.Provider value={{stateAuth,setstateAuth }}>
      <NavigationContainer >
        {isLoading ? <Load/> : stateAuth.status ? 
           <Tabvatany /> : 
           <Loga/>
        
        }   
      </NavigationContainer>
    </AuthConte.Provider>

  )
}
