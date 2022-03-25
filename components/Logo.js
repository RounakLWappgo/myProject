import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Logosvg from '../assets/Logo.svg';
import Logotext from '../assets/Logotext.svg';


export const Logo = () => {
  return <><View style={styles.logoContainer}>
    {/* <Image style={styles.logo} source={require('../assets/Logo.svg')} /> */}
    <Logosvg height={150} width={100} />
  </View>
  <Logotext height={50} width={150} />
  <View style={styles.taglineView}>
  <Text style={styles.tagLine1}>Make Yourself</Text>
  <Text style={styles.tagLine2}>Better</Text>
  </View>
  </>;
};
const styles = StyleSheet.create({
    logoContainer:{
        backgroundColor:"white",
        paddingHorizontal:30,
        borderRadius:30,
        width:160
    },
    tagLine1:{
      fontSize:60,
      color:"#FF7757",
      fontWeight:"bold"
    },
    taglineView:{
      textAlign:"center",
      marginTop:60,
      marginBottom:30
    },
    tagLine2:{
      fontSize:60,
      color:"#675C86",
      fontWeight:"bold",
      textAlign:"center",
      marginTop:-10
    },

})