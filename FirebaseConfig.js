import * as firebase from "firebase";
import "@firebase/firestore";

//Lager denne config-filen for å lage en sikker tilkobling til databasen.
//Hvis firebase auth lå ute i App.js kunne alle fått tak i den.
// Nå ligger den lokalt på min pc og for at folk skal få tak i den må man få informasjon direkte fra meg :P

//Oprettelse af databasekonfiguration
const config = {
    apiKey: "AIzaSyAtPVJPHo7MLI7v-dBm2ff2NpA0OH27OqQ",
    authDomain: "exam-project-d82b3.firebaseapp.com",
    databaseURL: "https://exam-project-d82b3.firebaseio.com",
    projectId: "exam-project-d82b3",
    storageBucket: "exam-project-d82b3.appspot.com",
    messagingSenderId: "444057957378",
    appId: "1:444057957378:web:58e4d06465f8b0b009a31b"
};

firebase.initializeApp(config);
//Firestore Cloud Database (det vi bruker) referanse
export const fsRef = firebase.firestore();
//Firebase authentication, brukes for å håndtere autentisering/innlogging
export const auth = firebase.auth();
//hvis det er realtime firebase
export const fbRef = firebase;



