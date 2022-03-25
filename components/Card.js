import React from 'react';
import { Image, ScrollView, View , Text} from 'react-native';

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

export default Card = () => {
  return  <ScrollView style={{backgroundColor:"#eee", marginVertical:20}} showsVerticalScrollIndicator={false}>
    {data.map((item, index) => {
        return  <View key={index} style={{marginHorizontal:20, backgroundColor:"white",marginVertical:15, borderRadius:20, overflow:"hidden",  elevation:5}}>
              <Image source={item.uri} style={{height:200, width:"100%"}}/>
              <View  style={{padding:20, borderTopWidth:1, borderColor:"#8C9195"}}>
              <Text style={{ fontSize:25, fontWeight:"bold"}}>{item.title}</Text>
              <Text style={{ fontSize:20, color:"#8C9195"}}>{item.title}</Text>
              </View>

          </View>
      })}
</ScrollView>
  
//   <ScrollView style={{ backgroundColor:"black"}}>
//       {data.map((item, index) => {
//           <View key={index}>
//               <Image source={item.uri} style={{height:300, marginHorizontal:20,marginVertical:30}}/>
//               <Text>{item.title}</Text>
//           </View>
//       })}
//   </ScrollView>;
};
