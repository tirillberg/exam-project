import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

export default function MapView({navigation}) {


    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <Text style={styles.header}>TITTEL</Text>

            <Text style={styles.subHeader}>nothing to see here</Text>

            <TouchableOpacity
                style={styles.orangeButton}
                onPress={() => navigation.push('/main')}>
                <Text style={styles.orangeButtonText}>button</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.whiteButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.orangeButtonText}>button</Text>
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
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },

    subHeader:{
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        alignItems: 'center',
    },

    text1:{
        color: 'white',
    },

    orangeButton:{
        backgroundColor: 'orange',
        color: '#47525E',
        width: '70%',
        height: '7%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 120,
        marginTop: 20,
    },

    orangeButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15.5,
    },

    whiteButton:{
        backgroundColor: '#FFFFFF',
        color: '#47525E',
        width: '70%',
        height: '7%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 110,
        marginTop: 20,
        marginBottom: 50,
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


    StyledView:{
        height:380,
    }

});

