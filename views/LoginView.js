import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';
import MainView from "./MainView";

export default class SignIn extends Component {

    state = {
        email: '',
        password: '',
        isLoggedIn: false
    };

    loginUser = async () => {
        const { email, password } = this.state;
        console.log('hei');
        try {
            // Here the data is passed to the service and we wait for the result
            const output =  await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(output);
            this.setState({ isLoggedIn: true });
        } catch (error) {
            console.log(error.message);
            alert('Feil brukernavn eller passord')
            this.setState({ isLoggedIn: false });
        }
    };
    componentDidMount() {
        this.loginUser
    }


    render(){
        if(this.state.isLoggedIn){
            return(
                <MainView/>
            )
        }else{

            return (
                <View style={styles.container}>

                    <Image
                        style={styles.image}
                        source={{uri: 'https://d3tpltn2ezya42.cloudfront.net/media/p/556x200/1489657373/logo-desktop.png'}}
                    />


                    <Text style={styles.subHeader}>SIGN IN</Text>



                    <TextInput
                        value={this.state.email}
                        keyboardType = 'email-address'
                        onChangeText={(email) => this.setState({ email })}
                        placeholder=' email'
                        placeholderTextColor = 'white'
                        style={styles.textInput}
                        selectionColor={'#FF6400'}
                    />

                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={' password'}
                        secureTextEntry={true}
                        placeholderTextColor = 'white'
                        style={styles.textInput}
                        selectionColor={'#FF6400'}
                    />


                    <TouchableOpacity
                        style={[styles.orangeButton,]}
                        onPress={this.loginUser} >
                        <Text style={styles.orangeButtonText}>Sign in</Text>
                    </TouchableOpacity>


                </View>
            );
        }



    };
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        //alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    error: {
        color: 'red',
    },

    header:{
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 100,
    },

    subHeader:{
        color: '#FF6400',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        marginLeft: 22,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        color: 'white',
        fontSize: 15,
    },

    text2:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },

    orangeButton:{
        backgroundColor: '#FF6400',
        color: '#47525E',
        width: '75%',
        height: '7.5%',
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 65,
        marginTop: 25,
        marginBottom: 300,
    },

    orangeButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 62,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },

    whiteButton:{
        backgroundColor: '#FFFFFF',
        color: '#47525E',
        width: '100%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 83,
        marginTop: 20,
    },

    backButton:{
        color: 'white',
        width: '100%',
        height: '10%',
        elevation: 8,
        marginTop: 20,
        marginRight: 350,
        marginBottom: -35,
    },


    textInput: {
        height: 40,
        width:'70%',
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },

    image:{
        marginTop: 15,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },



});

