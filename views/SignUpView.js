import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function SignUpView({route, navigation}) {

    //const {list, addNewVolunteer} = route.params;

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

/*
    function onSubmit(){

        //etablerer en helt ny liste, inni listen sier jeg at "...list" skal starte på den måten
        //legger til et ekstra element etter det

        //bruker hooks (addNewGoal hook) for å legge inn et ny element
        addNewVolunteer([...list,
            {
                id: list.length+1,
                name: name,
                username: username,
                password: password,
                email: email,
                birthday: birthday,
            },

        ])

        navigation.goBack();

        //console.log("submit");
    };
*/

    //console.log(name);

    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>

            <Text style={styles.subHeader}>REGISTER AS VOLUNTEER</Text>

            <TextInput
                style={styles.textInput}
                placeholder=" FIRST AND LAST NAME"
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" USERNAME"
                onChangeText={(text) => setUsername(text)}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" PASSWORD"
                onChangeText={(text) => setPassword(text)}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" EMAIL"
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" BIRTHDAY"
                onChangeText={(text) => setBirthday (text)}
            />

            <TouchableOpacity
                style={styles.orangeButton}
                //onPress={onSubmit}>
                onPress={() => navigation.push('/documentation')}>
                <Text style={styles.orangeButtonText}>Register as a new volunteer</Text>
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
        marginBottom: 50,
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
        paddingHorizontal: 65,
        marginTop: 70,
        marginBottom: 60,
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
        marginTop: 20,
        marginRight: 350,
        marginBottom: -35,
    },


    textInput: {
        height: 40,
        width:300,
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#8190A5',
        marginTop: 10,
        marginBottom: 10,
    },

});

