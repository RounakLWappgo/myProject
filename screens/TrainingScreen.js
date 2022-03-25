import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap , TabBar} from 'react-native-tab-view';
import Header from '../components/Header';
import List from '../components/List';

const FirstRoute = () => (<View style={[styles.scene, { backgroundColor: '#eee' }]}>
      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:20, marginBottom:20, marginTop:30, color:"black"}}>Most Popular Trainings</Text>
      <List horizontal={true}/>
      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:20, marginBottom:20, marginTop:30, color:"black"}}>Just For You</Text>
      <List horizontal={true}/>
  </View>
)

const SecondRoute = () => ( <View style={[styles.scene, { backgroundColor: '#eee' }]} />)
 

const ThirdRoute = () => (<View style={[styles.scene, { backgroundColor: '#eee' }]} />)


const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Master' },
    { key: 'second', title: 'Skilled' },
    { key: 'third', title: 'Begineer' },
  ]);

  return (
      <>
      <View style={{ marginTop: 30,}}>
      <Header name='Training'  Bell={false} Search={true} Menu={true} arrow={false} leftBar={true}/>

      </View>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={({ route, color }) => (
            <Text style={{ color: 'black', margin: 8 , fontSize:15, fontWeight:"bold"}}>
              {route.title}
            </Text>
          )}
          style={{backgroundColor: 'white'}}
          indicatorStyle={{backgroundColor:"#FF7558"}}
        />
      )}
      

    />

      </>

  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:"#eee",
  },
  scene: {
    flex: 1,
  },
});