import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';

export default AllCources = (props) => {
  return <View style={{marginTop:30,}}>
      <Header  name='All Courses' navigation={props.navigation} Bell={false} Search={true} Menu={true} arrow={true} leftBar={false}/>
      <Card/>
  </View>;
};
