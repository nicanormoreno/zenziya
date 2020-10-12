import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Scree1 from './src/screens/Screen1'
// import Carousel from './src/components/carousel'
import ContactsSolucitude from './src/screens/contactsSolicitude'
import LoginScreen from './src/screens/loginScreen'
import Selfie from './src/screens/selfie'
import CredentialPicture from './src/screens/credentialPicture'
import SelfieOpenCamera from './src/screens/selfieOpenCamera'
import CredentialOpenCamera from './src/screens/credentialOpenCamera'
import Home from './src/screens/home'
import Transfer from './src/screens/transfer'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Scree1/> */}
      {/* <Carousel/> */}
      {/* <ContactsSolucitude /> */}
      {/* <LoginScreen/> */}
      {/* <Selfie /> */}
      {/* <CredentialPicture /> */}
      {/* <SelfieOpenCamera /> */}
      {/* <CredentialOpenCamera/> */}
      {/* <Home/> */}
      <Transfer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
