import React from 'react';
import {View, TextInput, Text, ScrollView, Image} from 'react-native'
import Header from '../components/Header'
import List from '../components/List'
// import Ionicon from 'react-native-vector-icons/Ionicons'
import Rating from '../assets/rating.svg'

const data = [
    {
      title: 'Mike Anderson',
      coachType:
        'Running Coach',
        uri: require('../assets/dummyImage.png'),
        followers:'3.2k'
    },
    {
      title: 'Kelly Lewis',
      coachType: 'Running Coach',
      uri: require('../assets/dummyImage.png'),
      followers:'1.8k'
    },
    {
      title: 'Mike Jason',
      coachType:
        'Running Coach',
        uri: require('../assets/dummyImage.png'),
        followers:'2.2k'
    },
    {
      title: 'Lisa Haidean',
      coachType: 'Running Coach',
      uri: require('../assets/dummyImage.png'),
      followers:'1.1k'
    },
    {
      title: 'Lorem ipsum ',
      coachType: 'Running Coach',
      uri: require('../assets/dummyImage.png'),
      followers:'2.2k'
    },
  ];
export default SearchScreen = (props) => {
  return <ScrollView style={{marginTop:30}} showsVerticalScrollIndicator={false}>
      <Header name='Search' navigation={props.navigation} Bell={false} Search={true} Menu={true} arrow={true} leftBar={false}/>
      
      <View style={{marginHorizontal:10, justifyContent:"center", alignItems:"center", marginTop:20, flexDirection:"row", backgroundColor:"#F2F2F4", borderRadius:20,paddingHorizontal:10}}>
      {/* <Ionicon name="ios-search" size={20} color="#000"/> */}
          <TextInput style={{width:"95%", backgroundColor:"#A5AAAE", paddingHorizontal:20,paddingVertical:10, borderRadius:20}} placeholder='Search' />
      </View>
      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:20, marginBottom:20, marginTop:30,color:"black"}}>Popular Courses</Text>

      <List horizontal={true}/>

      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:20, marginBottom:20, marginTop:30,color:"black"}}>Top Trainers</Text>
      <View >
      {data.map((item, index) => {
          return <View key={index} style={{marginHorizontal:20, marginVertical:20, flexDirection:"row", alignItems:"center"}}>
                  <View style={{borderRadius:15, overflow:"hidden"}}>
                      <Image source={item.uri} style={{width:80, height:80}}/>
                  </View>
                  <View style={{marginLeft:20}}>
                    <Text style={{fontWeight:"bold", fontSize:20,color:"black"}}>{item.title}</Text>
                    <Text style={{color:"#A5AAAE"}}>{item.coachType}</Text>
                    <Rating width={120} height={30}/>
                  </View>
                  <View style={{marginLeft:"auto"}}>
                      <Text style={{fontWeight:"bold",color:"black"}}>{item.followers}</Text>
                      <Text style={{color:"#A5AAAE"}}>Followers</Text>
                  </View>
              </View>
          
      })}
</View>
  </ScrollView>;
};
