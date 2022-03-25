import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import Carousel from '../components/Carousel'
import Header from '../components/Header';
import List from '../components/List';

export default WelcomeScreen = (props) => {
  // console.log(props);
  return <ScrollView style={{marginTop:30}}>
      <Header Greet='Hey! Welcome' navigation={props.navigation} name='John!' Bell={false} Search={true} Menu={true} arrow={false} leftBar={false}/>
      <Carousel />
      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:20, marginBottom:20 ,color:"black"}}>Popular Training</Text>
      <List horizontal={true}/>
  </ScrollView>;
};
