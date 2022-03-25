import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default StatsCard = (props) => {
  return <View style={{backgroundColor:"white", marginHorizontal:10, marginVertical:10, borderRadius:30}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:20, paddingTop:10}}>
          <Text style={styles.heading}>{props.heading}</Text>
          {props.icon}
      </View>

      <View style={{justifyContent:"center", alignItems:"center"}}>
          {props.stats? props.stats:<View style={{ height:50}}>
          </View> }
      </View>
      <View style={{paddingHorizontal:20, marginBottom:10}}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>{props.number}</Text>
      <Text style={{color:"#9CA1A4"}}>{props.unit}</Text>
      </View>
  </View>;
};

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"bold",
    }
})