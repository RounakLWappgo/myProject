import React, {useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { InputField } from '../components/InputField';
import { Logo } from '../components/Logo';
import { ThreeDots } from '../components/ThreeDots';
import { Text, TouchableOpacity } from 'react-native';


export default Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    usernameHandler = (e) => {
        setusername(e)
    }
    passwordHandler = (e) => {
        setpassword(e)
    }
    Register = () =>{
        console.log("LogIn");
    }
  return  <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent:"center", alignItems:"center", width:"100%"}}>
      <Logo/>
      
      <InputField handleInput={this.usernameHandler} placeHolder={"Username"}/>
      <InputField handleInput={this.passwordHandler} isPassword={true} placeHolder={"Password"}/>
    <Buttoncomp  title="Log In" onCreateaccount={() => Register()} color={"#FF7757"} fontColor="white"/>
    <TouchableOpacity>
    <Text style={{fontSize:15, fontWeight:"bold", marginTop:5}}>Forget Password?</Text>
    </TouchableOpacity>
    <ThreeDots active={2}/>

      </KeyboardAwareScrollView>
  ;
};
