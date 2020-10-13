import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function LoginView({route, navigation}) {

    //const {list, addNewVolunteer} = route.params;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    /*function onSubmit(){

        //etablerer en helt ny liste, inni listen sier jeg at "...list" skal starte på den måten
        //legger til et ekstra element etter det

        //bruker hooks (addNewGoal hook) for å legge inn et ny element
        addNewVolunteer([...list,
            {

                username: username,
                password: password,

            },

        ])

        navigation.goBack();

        //console.log("submit");
    };*/

    //console.log(name);

    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>

            <Text style={styles.subHeader}>WELCOME BACK!</Text>

            <Text style={styles.header}>SIGN IN</Text>

            <TextInput
                style={styles.textInput}
                placeholder=" EMAIL"
                keyboardType = 'email-address'
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor = 'white'
                selectionColor={'orange'}
                textColor = 'white'
            />

            <TextInput
                style={styles.textInput}
                placeholder=" PASSWORD"
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor = 'white'
                secureTextEntry={true}
                selectionColor={'orange'}
            />

            <TouchableOpacity
                style={styles.orangeButton}
                //onPress={onSubmit}>
                onPress={() => navigation.push('/main')}>
                <Text style={styles.orangeButtonText}>Let's go!</Text>
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
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 90,
    },

    subHeader:{
        color: 'orange',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5,
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
        width: '73%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 25,
        paddingHorizontal: 120,
        marginTop: 15,
        marginBottom: 205,
    },

    orangeButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15.5,
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
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
    },

});



/*
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import MainView from "./MainView";
import firebase from "firebase";

export default class LoginView extends Component {
    //Der oprettes relevante state variabler, heriblandt varibler til håndtering
    //af credentials og en variabel, som skal tjekke, hvorvidt en person er logget ind.
    state = {
        email: '',
        password: '',
        isLoggedIn: false
    };

    //login metode. Dette er et asynkront kald, som validerer, hvovidt email og password
    //stemmer overens med de oplysninger, som er placeret i en firebase DB
    loginUser = async () => {
        const { email, password } = this.state;
        //Vi laver en try/catch i tilfælde af at der går noget galt under det asynkrone kald.
        try {
            // Here the data is passed to the service and we wait for the result
            const output =  await firebase.auth().signInWithEmailAndPassword(email, password);
            //Hvis credentials passser, skal state variablen sætte true
            //Der er ikke oprettet fejlhåndtering endnu
            this.setState({ isLoggedIn: true });
        } catch (error) {
            console.log(error.message);
            this.setState({ isLoggedIn: false });
        }
    };

    //Hvis komponenten mountes, skal dette registreres. Dette gøres ved brug af
    //componentDidMount
    componentDidMount() {
        this.loginUser
    }

    //I render tester vi status på isLoggedIn state variablen.
    //er variablen true, skal vi instantiere vores AppBottomNav Komponent
    //Ellers skal signIn siden fremvises
    render() {
        if(this.state.isLoggedIn){
            return(
                <MainView/>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Text style={styles.subHeader}>WELCOME BACK!</Text>
                    <Text style={styles.header}>SIGN IN</Text>

                    <TextInput
                        value={this.state.email}
                        keyboardType = 'email-address'
                        onChangeText={(email) => this.setState({ email })}
                        placeholder='email'
                        placeholderTextColor = 'white'
                        style={styles.input}
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'password'}
                        secureTextEntry={true}
                        placeholderTextColor = 'white'
                        style={styles.input}
                    />
                    <TouchableOpacity style={[styles.orangeButton, {width: 200, height: 55}]}
                                      onPress={this.loginUser} >
                        <Button color='black'>
                            Login
                        </Button>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

//Styling komponenter til design af siden

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
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 90,
    },

    subHeader:{
        color: 'orange',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5,
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
        width: '73%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 25,
        paddingHorizontal: 120,
        marginTop: 15,
        marginBottom: 205,
    },

    orangeButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15.5,
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

    titleText:{
        marginTop: 50,
        fontFamily: 'Baskerville',
        fontSize: 50,
    },

    button: {
        alignItems: 'center',
        width: 200,
        height: 44,
        padding: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        marginBottom: 10,
    },

    signInButtons: {
        width: 280,
        height: 60,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
    },

    buttonText:{
        fontFamily: 'Baskerville',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
    },

    input: {
        width: 200,
        fontFamily: 'Baskerville',
        fontSize: 20,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },

    welcomePic: {
        width: 64,
        height: 64,
    },
});


*/
