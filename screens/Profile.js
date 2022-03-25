import React from 'react';
import { View, Image, Text } from 'react-native';
import Header from '../components/Header'

export default Profile = () => {
  return <View style={{marginTop:30}}>
      <Header name='Profile' Bell={true} Search={false} Menu={true} arrow={false} leftBar={false}/>
      <View style={{marginHorizontal:30, marginTop:30, flexDirection:"row", alignItems:"center", marginBottom:20}}>
      <View style={{overflow:"hidden", borderRadius:20, width:120, height:120}}>
    <Image source={require('../assets/dummyImage.png')} style={{width:120, height:120}}/>
    </View>
    <View>
    <Text style={{fontSize:30 ,fontWeight:"bold", marginLeft:20, color:"black"}}>John Anderson</Text>
    <View style={{flexDirection:"row", marginTop:8}}>
    <View>
    <Text style={{fontSize:22 ,fontWeight:"bold", marginLeft:20,color:"black"}}>2931</Text>
    <Text style={{fontSize:18 , marginLeft:20, color:"#969B9F", fontWeight:"bold"}}>Followers</Text>
    </View>
    <View>
    <Text style={{fontSize:22 ,fontWeight:"bold", marginLeft:20,color:"black"}}>231</Text>
    <Text style={{fontSize:18 , marginLeft:20, color:"#969B9F", fontWeight:"bold"}}>Followings</Text>
    </View>
    </View>
    <View style={{marginLeft:20,backgroundColor:"#eee", width:"100%", height:10, marginTop:15, borderRadius:20}}></View>
    <View style={{marginLeft:20,backgroundColor:"#FF5D70", width:"80%", height:10, marginTop:-10, borderRadius:20}}></View>
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginLeft:20, marginTop:5}}>
    <Text style={{fontSize:22 ,fontWeight:"bold",color:"black"}}>Skilled</Text>
    <Text style={{fontSize:18 , color:"#969B9F", fontWeight:"bold"}}>980 Hours</Text>
    </View>
    </View>
      </View>


      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:20, marginVertical:20,color:"black"}}>Popular Training</Text>
   
  </View>;
};
