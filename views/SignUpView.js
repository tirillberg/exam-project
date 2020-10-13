/*
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function SignUpView({route, navigation}) {

    //const {list, addNewVolunteer} = route.params;

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    /!*
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
                },

            ])

            navigation.goBack();

            //console.log("submit");
        };
    *!/

    //console.log(name);

    return (
        /!*Her har vi et et View med klasse navnet container og der er en enkel render View*!/
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
                placeholderTextColor = 'white'
                selectionColor={'orange'}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" USERNAME"
                onChangeText={(text) => setUsername(text)}
                placeholderTextColor = 'white'
                selectionColor={'orange'}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" PASSWORD"
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor = 'white'
                selectionColor={'orange'}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" EMAIL"
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor = 'white'
                selectionColor={'orange'}
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
        marginBottom: 120,
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
        color: 'white',
    },

});
*/






import * as React from 'react';
import {Button, Text, View, TextInput, ActivityIndicator, StyleSheet, Image} from 'react-native';
import firebase from "firebase";

export default class SignUpView extends React.Component {


    //Definerer forskjellige state-variabler - de kan endre seg
    state = {
        //name: '',
        email: '',
        password: '',
        //false, fordi hvis vi ikke har gjort et kall til databasen så skal den ikke loade. Samme med isCompleted.
        isLoading: false,
        isCompleted: false,
        errorMessage: null,
    };

    //Denne fremviser at vi loader. Når en operasjon settes i gang skal det vises et "spinnesymbol".
    startLoading = () => this.setState({ isLoading: true });
    //Når loadingen er ferdig kalles denne metoden for å fjerne spinningen fra trinnet over.
    endLoading = () => this.setState({ isLoading: false });
    //Denne vises når vi skal presentere en feilmelding
    setError = errorMessage => this.setState({ errorMessage });
    //Denne kalles når vi prøver en operasjon igjen og skal fjerne feilmeldingen.
    clearError = () => this.setState({ errorMessage: null });

    //Står for å oppdatere verdiene av våre input fields nrå det blir skrevet noe inn i disse
    //handleChangeName = name => this.setState({ name });
    handleChangeEmail = email => this.setState({ email });
    handleChangePassword = password => this.setState({ password });

    //Når vi trykker på knappen så aktiveres handleSubmit.
    handleSubmit = async () => {
        const { email, password } = this.state;
        //Starter å forsøke og opprette en bruker
        try {
            this.startLoading();
            this.clearError();

            //lager kall til databasen
            const result = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);

            console.log(result);

            this.endLoading();
            this.setState({ isCompleted: true });
        } catch (error) {
            this.setError(error.message);
            this.endLoading();
        }
    };

    render = () => {
        const { errorMessage, email, password, isCompleted } = this.state;
        if (isCompleted) {
            return <TouchableOpacity
                style={styles.orangeButton}
                onPress={this.handleSubmit}>
                {/*onPress={() => navigation.push('/documentation')}>*/}
                <Text style={styles.orangeButtonText}>Register as a new volunteer</Text>
            </TouchableOpacity>
        }
        return (
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={{uri: 'https://d3tpltn2ezya42.cloudfront.net/media/p/556x200/1489657373/logo-desktop.png'}}
                />


                <Text style={styles.subHeader}>REGISTER AS VOLUNTEER</Text>


                {/*<TextInput
                    placeholder="name"
                    value={name}
                    onChangeText={this.handleChangeName}
                    style={styles.inputField}
                />*/}
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={this.handleChangeEmail}
                    placeholderTextColor = 'white'
                    selectionColor={'orange'}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="password"
                    value={password}
                    onChangeText={this.handleChangePassword}
                    secureTextEntry
                    placeholderTextColor = 'white'
                    selectionColor={'orange'}
                    style={styles.textInput}
                />
                {errorMessage && (
                    <Text style={styles.error}>Error: {errorMessage}</Text>
                )}
                {this.renderButton()}
            </View>
        );
    };

    renderButton = () => {
        const { isLoading } = this.state;
        if (isLoading) {
            return <ActivityIndicator />;
        }
        return <Button
            color='#FF6400'
            onPress={this.handleSubmit}
            title="Register as a new volunteer" />;
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },

    image:{
        marginTop: 10,
        width: '90%',
        height: 50,
        marginLeft: 22,
    },

});


