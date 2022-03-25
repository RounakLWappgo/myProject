import React, {useState} from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { InputField } from '../components/InputField';
import { Logo } from '../components/Logo';
import { ThreeDots } from '../components/ThreeDots';


export const CreateAccount = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    usernameHandler = (e) => {
        setusername(e)
    }
    passwordHandler = (e) => {
        setpassword(e)
    }
    emailHandler = (e) => {
        setemail(e)
    }
    Register = () =>{
        console.log("Register");
    }
  return  <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent:"center", alignItems:"center", width:"100%"}}>
      <Logo/>
      
      <InputField handleInput={this.usernameHandler} placeHolder={"Username"}/>
      <InputField handleInput={this.emailHandler} placeHolder={"Email"}/>
      <InputField handleInput={this.passwordHandler} isPassword={true} placeHolder={"Password"}/>
    <Buttoncomp  title="Register" onCreateaccount={() => Register()} color={"#FF7757"} fontColor="white"/>
    <ThreeDots active={3}/>

      </KeyboardAwareScrollView>
  ;
};
