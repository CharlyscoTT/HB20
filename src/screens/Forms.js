import React, { useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image, ScrollView} from 'react-native';
import {Item, Input, Text, Button} from "native-base";
import HB20N from "../assets/HB20N.jpg";
import {map} from "../utils/firebase";
import firebase from "../utils/firebase";
import "firebase/database";
import moment from 'moment';

export default function Forms(props) {
    const [name, setName] = useState();
    const [lastname, setLatname] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();

    const onSubmit= () => {
        if(name.length, lastname.length, month.length, day.length,  year.length > 0){
            const año = moment().format("YYYY");
            const age = año-year;
            firebase.database().ref("general").push({nombre: name, apellidos: lastname, edad: age})
            setName("");
            setLatname("");
            setMonth("");
            setDay("");
            setYear("");
        }
    };

   
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Item>
                <Input 
                    placeholder="Name" 
                    style={{fontWeight: 'bold', color:"#000000"}} 
                    placeholderTextColor="#000000"
                    value = {name}
                    onChange = {(e) => setName(e.nativeEvent.text)}
                />
                <Input 
                    placeholder="Last Name" 
                    style={{ fontWeight: 'bold', color:"#000000"}} 
                    placeholderTextColor="#000000" 
                    value = {lastname}
                    onChange = {(e) => setLatname(e.nativeEvent.text)}/>
            </Item>
            <Text style={styles.textbirthday}>Birthdate:</Text>
            <Item>
                <Input 
                    placeholder="Month" 
                    keyboardType= "numeric"
                    style={{fontWeight: 'bold', color:"#000000"}} 
                    placeholderTextColor="#000000"
                    value = {month}
                    onChange = {(e) => setMonth(e.nativeEvent.text)}
                />
                <Input 
                    placeholder="Day" 
                    keyboardType= "numeric"
                    style={{fontWeight: 'bold', color:"#000000"}} 
                    placeholderTextColor="#000000"
                    value = {day}
                    onChange = {(e) => setDay(e.nativeEvent.text)}
                />
                 <Input 
                    placeholder="Year" 
                    keyboardType= "numeric"
                    style={{fontWeight: 'bold', color:"#000000"}} 
                    placeholderTextColor="#000000"
                    value = {year}
                    onChange = {(e) => setYear(e.nativeEvent.text)}
                />
            </Item>
            <View style={styles.View}>
                <Image source={HB20N} resizeMode="contain" style={styles.logo}/>
            </View>
            <Button style={styles.btnRegistry} onPress={onSubmit}>
                <Text style={styles.text}>To register</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomColor: "#000000",
        backgroundColor:  "#EFC460",
        marginHorizontal: 20,
        marginVertical: 10,     
    },

    logo:{
        width: "100%",
        height: 200,
        marginBottom: 20,
    },

    text:{
        color: "#000000",
    },

    btnRegistry:{
        marginTop: 40,
        marginLeft: 55,
        width: 250,
        height:50,
        justifyContent: "center",
        backgroundColor: "#FF8712",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,   
    },

    textbirthday:{
        color:"#000000",
        marginTop: 20,
        fontWeight: 'bold' 
    },

    View:{
        marginTop: 40,
    }

    
})