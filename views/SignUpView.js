import * as React from 'react';
import {Button, Text, View, TextInput, ActivityIndicator, StyleSheet, Image} from 'react-native';
import firebase from "firebase";

export default function SignUpView ({navigation}) {

        return (
            <View style={styles.container}>

                <Image style={styles.image} source={require('../assets/alert1.png')}></Image>

            </View>
        );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17191F',
        alignItems: 'center',
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
        color: '#25BDAD',
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

    blueButton:{
        backgroundColor: '#25BDAD',
        color: '#47525E',
        width: '75%',
        height: '7.5%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 65,
        marginTop: 70,
        marginBottom: 60,
    },

    blueButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
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
        marginLeft: 70,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },

    image:{
        marginTop: 200,
        width: 350,
        height: 175,
        justifyContent: 'center'
    },

});
