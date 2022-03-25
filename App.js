import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { CreateAccount } from './screens/CreateAccount';
// import StartupScreen from './screens/startupScreen';
// import Login from './screens/Login';
import WelcomeScreen from './screens/WelcomeScreen';
import TrainingScreen from './screens/TrainingScreen';
// import Carousel from './components/Carousel';
import AllCourses from './screens/AllCourses';
import SearchScreen from './screens/SearchScreen';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return  <Tab.Navigator screenOptions={{ headerShown:false}}>
      <Tab.Screen name="Nain" component={WelcomeScreen} />
      <Tab.Screen name="All Courses" component={AllCourses} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
}

export default function App() {
  return ( 
    <NavigationContainer>
<Drawer.Navigator screenOptions={{ headerShown:false}}>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Training" component={TrainingScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
    // <Profile/>
  // <Dashboard/>
    // <SearchScreen/>
  // <AllCourses/>
  // <TrainingScreen/>
    // <View style={styles.container}>
    //   {/* <StartupScreen /> */}
    //   {/* <CreateAccount/> */}
    //   {/* <Login/> */}
    // <WelcomeScreen/> 
      // <TrainingScreen/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
