import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ThreeDots = (props) => {
    const active = props.active
  return <View style={{marginTop:30, flexDirection:"row"}}>
      <View style={{backgroundColor:active == 1 ? "#FF7558":"#CBCCCE" , width:15, height:5, borderRadius:20, marginHorizontal:2}}></View>
      <View style={{backgroundColor:active == 2 ? "#FF7558":"#CBCCCE", width:15, height:5, borderRadius:20, marginHorizontal:2}}></View>
      <View style={{backgroundColor:active == 3 ? "#FF7558":"#CBCCCE", width:15, height:5, borderRadius:20, marginHorizontal:2}}></View>
  </View>;
};
