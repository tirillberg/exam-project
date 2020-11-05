import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import {AntDesign} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MainView from "./MainView";
import CalendarView from "./CalendarView";
import ConsentView from "./ConsentView";
import MapView from "./MapView";
import SettingsView from "./SettingsView";
import InformationView from "./InformationView";
//importerer {auth} for å hente fra FirebaseConfig
import { auth, fsRef } from './../FirebaseConfig';

export default class SignIn extends Component {

    state = {
        email: '',
        password: '',
        isLoggedIn: false
    };

    loginUser = async () => {
        const { email, password } = this.state;
        console.log('console log error');

        //lager referanse til this utenfor så det er mulig å kalle på this.setstate inne i Firebase
        const oldThis = this;
        await auth.signInWithEmailAndPassword(email, password).then(
            //then --> sign in og password går fint = så håndterer den det som står i then.
            //hvis ikke håndterer den det i catch
            (data) => {
                console.log('uid for user:', data.user.uid);

                //går gjennom collection i Firebase og sjekker den collection med navn "volunteers"
                //deretter går den gjennom document og ser på uid
                const volunteerRef = fsRef.collection("volunteers").doc(data.user.uid);

                volunteerRef.get().then(function(doc) {
                    // sjekker om doc'et eksisterer
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        //hvis doc'et matcher et doc i databasen så logges brukeren inn

                        //dette som gjør at brukeren er logget inn, men det bør endres til hooks!!!
                        oldThis.setState({isLoggedIn: true});
                        //setUserInfo(doc.data());
                        // bare logg inn brukeren her, for her finnes brukeren allerede i databasen
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                        //hvis doc'et ikke finnes så logges man på men så blir doc'et tilføyet til databasen
                        //men satt til å ikke ha noe navn, email eller alder
                        volunteerRef.set({
                            name: '',
                            email: email,
                            age: 0,
                            //hvis ovenstående går fint så kommer "then"
                            //Nye doc'et blir skrevet suksessfult
                        }).then(function() {
                            console.log("Document successfully written!");

                            //dette skal endres til Hooks
                            oldThis.setState({ isLoggedIn: true });
                        })
                            .catch(function(error) {
                                console.error("Error writing document: ", error);
                            });

                        oldThis.setState({ isLoggedIn: true });
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                })
            }

        ).catch((e)=>{
            console.log(e);
            alert('Wrong username or password')
            this.setState({ isLoggedIn: false });
        });
    };

    componentDidMount() {
        this.loginUser
    }


    render(){
        if(this.state.isLoggedIn){
            return(
                //<ConsentView/>
                <AppBottomNav/>
            )
        }else{

            return (
                <View style={styles.container}>

                    <Image style={styles.image} source={require('../assets/image2.png')}></Image>

                    <Text style={styles.header}>SIGN IN</Text>

                    <TextInput
                        value={this.state.email}
                        keyboardType = 'email-address'
                        onChangeText={(email) => this.setState({ email })}
                        placeholder=' email'
                        placeholderTextColor = 'white'
                        style={styles.textInput}
                        selectionColor={'#F05A89'}
                    />

                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={' password'}
                        secureTextEntry={true}
                        color = 'white'
                        placeholderTextColor = 'white'
                        style={styles.textInput}
                        selectionColor={'#F05A89'}
                    />

                    <TouchableOpacity
                        style={[styles.pinkButton,]}
                        onPress={this.loginUser}>
                        <Text style={styles.blueButtonText}>Sign in</Text>
                    </TouchableOpacity>

                </View>
            );
        }



    };
}


// Denne TabNavigator holder styr på det ytterste nivået av navigasjon i appen.
// Det er altså menyen som ligger nede i systemet, og skal hjelpe med å navigere.

const TabNavigator = createBottomTabNavigator(
    {
        /*Tilføj routes*/
        Main: {
            /*Hvilket view skal loades*/
            screen: MainView,
            /*Instillinger til navigation*/
            navigationOptions: {
                /*Navn*/
                tabBarLabel:'Home',
                /*Ikon*/
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="home" size={24} color='white' />
                    )
            },
        },

        Calendar: {
            screen: CalendarView,
            navigationOptions: {
                tabBarLabel:'Schedule',
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name="schedule" size={24} color="white" />
                )
            },
        },


        Map: {
            screen: MapView,
            navigationOptions: {
                tabBarLabel:'Map',
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name='address' size={24} color='white' />
                    )
            },
        },

        Documentation: {
            screen: InformationView,
            navigationOptions: {
                tabBarLabel:'Info',
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name='exception1' size={24} color='white' />
                    )
            },
        },

        /*Navn på Route*/
        Settings: {
            screen: SettingsView,
            navigationOptions: {
                tabBarLabel:'Profile',
                tabBarIcon: ({ tintColor }) => (
                    /*<Feather name='settings' size={24} color='white' />*/
                    <AntDesign name="user" size={24} color="white" />
                    /*<FontAwesome5 name="user" size={24} color="white" />*/
                    )
            },
        },


    },
    /*Generelle label indstillinger*/
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: '#F05A89',
            inactiveTintColor: 'white',
            activeBackgroundColor: '#17191F',
            inactiveBackgroundColor: '#17191F',
            size: 50,
        }
    }
)

const AppBottomNav = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E223A',
    },

    component:{
        paddingTop:10
    },

    error: {
        color: 'red',
    },

    header:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    subHeader:{
        color: '#25BDAD',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        //marginLeft: 22,
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
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 65,
        marginTop: 25,
        marginBottom: 300,
    },

    blueButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 62,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },

    pinkButton:{
        backgroundColor: '#F05A89',
        color: '#47525E',
        width: '60%',
        height: '7.5%',
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 35,
        marginTop: 25,
        marginBottom: 300,
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
        marginTop: 75,
        width: '90%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
