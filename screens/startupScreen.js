import React from 'react';
import { View } from 'react-native';
import { Logo } from '../components/Logo';
import Buttoncomp  from '../components/Button';
import { ThreeDots } from '../components/ThreeDots';

export default StartupScreen = () => {
    createAccount = () =>{
        console.log("Create Account");
    }
    signIn = () =>{
        console.log("Sign In");
    }
  return <>
      <Logo/>
  <Buttoncomp  title="Create Account" onCreateaccount={() => createAccount()} color={"#FF7757"} fontColor="white"/>
  <Buttoncomp  title="Sign In" onCreateaccount={() => signIn()} color={"#FFBB5A"} fontColor="white"/>
  <Buttoncomp  title="Login with Facebook" onCreateaccount={() => signIn()} color={"white"} fontColor="black"/>
  <ThreeDots active={1}/>
  </>;
};
