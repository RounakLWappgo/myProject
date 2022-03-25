import React, {useState} from 'react';
import { View, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';


export const InputField = (props) => {
    const [text, settext] = useState("");
  return <View style={styles.textView}>
            <TextInput style={styles.input}
        onChange={(e) => {props.handleInput(e.nativeEvent.text)
        settext(e.nativeEvent.text)}}
        value={text}
        secureTextEntry={props.isPassword? true: false}
        placeholder={props.placeHolder}
      />
  </View>;
};

const styles = StyleSheet.create({
    input:{
        backgroundColor:"white",
        width:300,
        fontSize:20,
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:15
    },
    textView:{
        marginTop:10,
        width:"100%"
    }
})