import React from 'react';
import { View ,Text, TouchableOpacity} from 'react-native';

export default Buttoncomp = (props) => {
  return <TouchableOpacity style={{
    width:300,
    borderRadius:10,
    marginTop:20,
    backgroundColor:props.color,
    paddingVertical:20
    
  }} onPress={props.onCreateaccount}>
  <View >
      
      <Text style={{textAlign:"center", fontSize:20, color:props.fontColor, fontWeight:"bold"}}>{props.title}</Text>
      
  </View>
  </TouchableOpacity>;
};