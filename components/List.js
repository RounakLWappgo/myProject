import React from 'react';
import { Image, ScrollView, View, Text, TouchableOpacity } from 'react-native';

const data = [
    {
      uri: require('../assets/dummyImage.png'),
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      uri: require('../assets/dummyImage.png'),
      title: 'Lorem ipsum ',
      content: 'Neque porro quisquam est qui dolorem ipsum ',
    },
    {
      uri: require('../assets/dummyImage.png'),
      title: 'Lorem ipsum dolor',
      content:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      uri: require('../assets/dummyImage.png'),
      title: 'Lorem ipsum dolor',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    },
    {
      uri: require('../assets/dummyImage.png'),
      title: 'Lorem ipsum ',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
    },
  ];
  
export default List = (props) => {
  return <ScrollView horizontal={props.horizontal} showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => {
          return <View key={index} style={{width:300, height:250, overflow:"hidden",marginHorizontal:20}}>
              <TouchableOpacity style={{backgroundColor:"white", width:300, borderRadius:20, overflow:"hidden", marginVertical:5, elevation:2}}>
              <Image source={item.uri} style={{width:300, height:180}}/>
              </TouchableOpacity>
              <Text style={{fontSize:20, color:"black"}}>{item.title}</Text>

              <Text style={{color:"#8C9195", fontSize:18}}>{item.title}</Text>
            
          </View>
      })}
  </ScrollView>;
};
