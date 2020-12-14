import {Container} from "native-base";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Forms from "./src/screens/Forms";


export default function App ()  {
  return (
    <Container>
      <Text style={styles.text}>Welcome to App for the Birthdate</Text>
        <Forms>
          
        </Forms> 
    </Container>
  )
}



const styles = StyleSheet.create({

  text:{
    fontWeight: "bold",
    justifyContent: "center",
    marginHorizontal: 95,

  }

})
