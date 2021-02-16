import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Login from './components/Login'

const App =()=> {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
  )
}
export default  App;
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#F4BE2C"
  }
})