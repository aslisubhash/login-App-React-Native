import React, { Component } from 'react'
import { Text, View, Image,StyleSheet } from 'react-native'
import LoginForm from './LoginForm'

const Login =()=> {
    return (
    <View style={styles.container} >
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../assets/DealChor.png")}/>
        <Text style={styles.title}>
            BookChor LogIn Screen
        </Text>
      </View>
      <View style={styles.form}>
        <LoginForm/>
    </View> 
    </View>
  )
}

export default  Login;
 
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logo:{
        height: 100,
        width:100
    },
    form:{
        flex:2
    },
    title:{
        fontSize: 20,
        color:"#fff"
    },
    logocontainer:{
        flexGrow:1,
        justifyContent:"center",
        alignItems:"center",
    }
})