import React from 'react';
import { Text, View } from 'react-native';
import Search from '../assets/search.svg'
import Menu from '../assets/menu.svg'
import Bell from '../assets/bell.svg'
import Arrow from '../assets/leftarrow.svg'
import * as ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default Header = (props) =>  {
        const [responseCamera, setResponseCamera] = React.useState(null);
        const [responseGallery, setResponseGallery] = React.useState(null);
      
        const openCameraWithPermission = async () => {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'App Camera Permission',
                message: 'App needs access to your camera ',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              ImagePicker.launchCamera(
                {
                  mediaType: 'photo',
                  includeBase64: true,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                (response) => {
                  console.log(response);
                  setResponseCamera(response);
                  setResponseGallery(null);
                },
              );
            } else {
              console.log('Camera permission denied');
            }
          } catch (err) {
            console.warn(err);
          }
        }

        openDocumentPicker = async () => {
            try {
              const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
              
              });
                console.log(
                res
                );
              } catch ( err ) {
                console.log(err);
              }
        }





  return <><View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center", marginBottom:10}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
    {props.leftBar?<View style={{borderLeftWidth:4, height:30}}></View>:<View></View>}
          {props.arrow?<View style={{height:20, width:25, marginLeft:20}}><Arrow onPress={() => props.navigation.goBack()}/></View> :<View></View> }
      {/* <View style={{height:20, width:25}}><Arrow/></View> */}
 
      <View style={{marginLeft:30}}>
          {props.Greet?<Text style={{color:"#8C9195", fontSize:30}}>{props.Greet}</Text>:<View></View>}
          {props.name?<Text style={{fontSize:30, fontWeight:"bold", color:"black"}}>{props.name}</Text>:<View></View>}
          </View>
      </View>
      
      <View style={{flexDirection:"row", marginHorizontal:10}}> 
      {props.Search? <View style={{height:20, width:25, marginHorizontal:10}}><Search onPress={() => props.navigation.jumpTo('Search')}/></View> :<View></View>}
      {props.Bell? <View style={{height:20, width:25, marginHorizontal:10}}><Bell onPress={() => openDocumentPicker()}/></View> :<View></View>}
      {props.Menu? <View style={{height:20, width:25, marginHorizontal:10}}><Menu onPress={() => props.navigation.openDrawer()}/></View> :<View></View>}
      </View>

  </View></>};

