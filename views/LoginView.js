import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { auth, fsRef } from './../FirebaseConfig';
import {useUserStore} from '../store/UserStore';

export default function LoginView ({navigation}) {

    //Deklarerer hooks: email og password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Her brukes en global hook, altså at vi setter brukeren, så kan vi bruke denne brukeren
    // hvor som helst i appen/programmet og ikke kun i dette View.
    const {user, setUser} = useUserStore(
        state => ({user: state.user, setUser: state.setUser })
    );

    //hver gang vi endrer user-objektet, så printes dette ut for å sjekke at alt fungerer som det skal.
    //for å gjøre det mer synlig det som skjer
    //dette tilsvarer componentDidUpdate hvis det var klassekomponent
    useEffect(()=>{
        console.log('Global user: ' + user);
    },[user]);

    //Async - do NOT halt all other operations while waiting for the web service call to return
    const loginUser = async () => {
        //let variables can be updated but not re-declared
        //hvis brukeren som logges inn ikke har consent = true, er denne uendret og blir værende false.
        let consent = false;
        //await gjør på en måte sånn at async blir sync, altså man skal vente på email og password blir sjekket.
        //bruker auth
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

                        //her setter vi user globalt
                        setUser(doc.data());
                        //consent står oppstilt her, fordi den skal brukes senere i samme metode.
                        consent = doc.data().consent;
                        // bare logger inn brukeren her, for her finnes brukeren allerede i databasen
                    } else {
                        //hvis brukeren ikke er logget inn før, altså at vedkommende har fått bruker-
                        //informasjon av fx Bergenfest så er det det under som vises, altå at ved-
                        //kommende ikke har noe navn, eller alder registrert, og consent = false.
                        const newUser = {
                            name: '',
                            email: email,
                            age: 0,
                            id: data.user.uid,
                            consent: false,
                            //hvis ovenstående går fint så kommer "then"
                            //Nye doc'et blir skrevet suksessfult
                        };
                        //hvis doc'et ikke finnes så logges man på men så blir doc'et tilføyet til databasen
                        //men satt til å ikke ha noe navn, email eller alder
                        volunteerRef.set(newUser).then(function() {
                            console.log("User registered and added to database");
                            //her setter vi user globalt
                            setUser(newUser);
                        })
                            .catch(function(error) {
                                console.error("Error adding user to database: ", error);
                            });
                    }
                    console.log('Redirect to navigation with consent = ',consent);
                    //consent = true
                    if (consent) {
                        navigation.navigate('/nav');
                    }
                    //consent = false
                    else {
                        navigation.navigate('/consent');
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                })
            }

        ).catch((e)=>{
            console.log(e);
            alert('Wrong username or password')
        });
    };

    //Det ovenfor er funksjonaliteten på denne siden, mens det under, det som returneres
    //er det som vises front-end
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/festivol3.png')}></Image>

            <Text style={styles.header}>SIGN IN</Text>

            <TextInput
                value={email}
                //keyboardType = 'email-address'
                onChangeText={(string) => setEmail(string)}
                placeholder=' email'
                placeholderTextColor = 'white'
                style={styles.textInput}
                selectionColor={'#ea534a'}
            />

            <TextInput
                value={password}
                onChangeText={(string) => setPassword(string)}
                placeholder={' password'}
                secureTextEntry={true}
                color = 'white'
                placeholderTextColor = 'white'
                style={styles.textInput}
                selectionColor={'#ea534a'}
            />

            <TouchableOpacity
                style={[styles.pinkButton,]}
                onPress={loginUser}>
                <Text style={styles.blueButtonText}>Sign in</Text>
            </TouchableOpacity>

        </View>
    );


}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#17191F',
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
        backgroundColor: '#ea534a',
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
        marginTop: 150,
        width: 200,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
