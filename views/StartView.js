import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

export default function StartView({navigation}) {


    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>


            <Image style={styles.image} source={require('../assets/BL_square.jpg')}></Image>

            <Text style={styles.header}>VELKOMMEN!</Text>

            <TouchableOpacity
                style={styles.orangeButton}
                //navigerer videre til MainView
                onPress={() => navigation.navigate('/main')}>
                <Text>Connect with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.whiteButton}
                onPress={() => navigation.navigate('/login')}>
                <Text  style={styles.whiteButtonText} >Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => navigation.navigate('/signUp')}>
                <Text style={styles.signUpText}>Don't have an account yet? Sign up here!</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    header:{
        color: '#FF6400',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 35,
        marginBottom: 5,
    },

    subHeader:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },

    text:{
        color: '#47525E',
        fontSize: 15,
        marginTop: 30,
    },

    text2:{
        color: '#8190A5',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },

    orangeButton:{
        backgroundColor: '#FF6400',
        color: '#47525E',
        width: '75%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },

    whiteButton:{
        backgroundColor: '#FFFFFF',
        width: '75%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 18,
        paddingHorizontal: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    whiteButtonText:{
        fontWeight:'bold',
        fontSize: 17,
        color: '#47525E',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signUpButton:{
        width: '100%',
        height: '10%',
        elevation: 8,
        marginTop: 20,
        marginBottom: 85,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signUpText: {
        fontWeight:'bold',
        color: '#B3B3B3'
    },

    image:{
        marginTop: 25,
        width: 150,
        height: 150,
    },

});
