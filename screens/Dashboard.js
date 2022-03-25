import React, {useState} from 'react';
import { View,ScrollView, Text, TouchableOpacity, Image } from 'react-native';
// import Ionicon from 'react-native-vector-icons/Ionicons'
import StatsCard from '../components/StatsCard';
import Sleep from '../assets/sleep.svg'
import Water from '../assets/water.svg'
import Steps from '../assets/steps.svg'
import Calories from '../assets/calories.svg'
import Training from '../assets/training.svg'
import Heart from '../assets/heartorange.svg'
import HeartGraph from '../assets/heartGraph.svg'
import WaterGraph from '../assets/waterGraph.svg'
import MasonryList from '@react-native-seoul/masonry-list';


const data = [
    {
      id: '123',
      imgURL:
        'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
      text: 'Heart',
      icon:<Heart width={40} height={35}/>,
      stats:<HeartGraph width={130} height={135}/>
    },
    {
      id: '124',
      imgURL:
        'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
      text: 'Steps',
      icon:<Steps width={40} height={35}/>,
      stats:<WaterGraph width={130} height={135}/>
    },
    {
      id: '125',
      imgURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
      text: 'Water',
      icon:<Water width={40} height={35}/>,
      stats:<WaterGraph width={130} height={135}/>
    },
    {
      id: '126',
      imgURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
      text: 'Sleep',
      icon:<Sleep width={40} height={35}/>,
      stats:""
    },
    {
      id: '127',
      imgURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
      text: 'Training',
      icon:<Training width={40} height={35}/>,
      stats:<WaterGraph width={130} height={135}/>
    },
    {
      id: '128',
      imgURL:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
      text: 'Calories',
      icon:<Calories width={40} height={35}/>,
      stats:<WaterGraph width={130} height={135}/>
    },
   
  ];


export default Dashboard = () => {
    const [active, setactive] = useState("Today");
  return <View style={{marginTop:60, flex:1}}>
      {/* <Header name='Dashboard' Bell={true} Search={false} Menu={true} arrow={false} leftBar={true}/> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"baseline", marginTop:20, height:40}}>
            <TouchableOpacity onPress={() => setactive("Today")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "Today"?25: 20, marginHorizontal:35, fontWeight:active == "Today"?"bold": "500"}}>Today</Text>
            {active == "Today"? <View></View>: <View></View>}
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setactive("Week")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "Week"?25: 20, marginHorizontal:35, fontWeight:active == "Week"?"bold": "500"}}>Week</Text>
            {active == "Week"? <View></View>: <View></View>}
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setactive("Month")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "Month"?25: 20, marginHorizontal:35, fontWeight:active == "Month"?"bold": "500"}}>Month</Text>
            {active == "Month"? <View></View>: <View></View>}
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setactive("3 Month")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "3 Month"?25: 20, marginHorizontal:35, fontWeight:active == "3 Month"?"bold": "500"}}>3 Month</Text>
            {active == "3 Month"? <View></View>: <View></View>}
            </View>
            </TouchableOpacity>
        </ScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
        <MasonryList
        ListHeaderComponent={<View />}
        contentContainerStyle={{
          paddingHorizontal: 4,
          alignSelf: 'stretch',
          marginTop:20, backgroundColor:"#F2F2F4"
        }}
        numColumns={2}
        data={data}
        renderItem={({item}) => <StatsCard key={item.id} heading={item.text} stats={item.stats} icon={item.icon} unit={"kcal"} number={item.id}/>}
      />

        </ScrollView>
  </View>;
};
