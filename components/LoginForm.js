import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet  } from 'react-native'

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder="Username"
                style = {styles.input}
                />
                <TextInput 
                placeholder="Password"
                style = {styles.input}
                />
                <TouchableOpacity>
                    <Text>LogIn</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    input:{
        height: 40,
        fontSize: 20,
        paddingLeft:10 ,
        backgroundColor:"rgba(255,255,255, 0.8)",
        marginBottom:10
    },
})