import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export default function EditGoalView({route, navigation}) {

    const {id, name, password, email} = route.params;

    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.backButton}
                //.goBack -> man går ned en stack i bunken, altså tilbake et view
                onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>

            <Text style={styles.subHeader}>YOUR SETTINGS</Text>

            <Image
                style={styles.image}
                source={{uri: 'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png'}}
                //source={{uri: 'https://i.stack.imgur.com/l60Hf.png'}}
            />

            <TextInput
                style={styles.textInput}
                placeholder = {name}
                onChangeText={(text) => this.setState({text})}
                placeholderTextColor = 'white'
                selectionColor={'orange'}
            />


            <TextInput
                style={styles.textInput}
                placeholder= {password}
                onChangeText={(text) => this.setState({text})}
                placeholderTextColor = 'white'
                selectionColor={'orange'}
            />

            <TextInput
                style={styles.textInput}
                placeholder= {email}
                onChangeText={(text) => this.setState({text})}
                placeholderTextColor = 'white'
                selectionColor={'orange'}
            />


            <TouchableOpacity
                style={styles.orangeButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.orangeButtonText}>Save changes</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    header:{
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 100,
    },

    subHeader:{
        color: 'orange',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
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
        backgroundColor: 'orange',
        color: '#47525E',
        width: '75%',
        height: '7.5%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 108,
        marginTop: 70,
        marginBottom: 150,
    },

    orangeButtonText: {
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
        marginTop: 30,
        marginRight: 350,
        marginBottom: -35,
    },

    textInput: {
        height: 40,
        width:300,
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
    },

    image:{
        marginTop: 5,
        marginBottom: 20,
        width: 105,
        height: 105,
    },


});

