import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import {StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase";
import StartView from "./views/StartView";
import MainView from "./views/MainView";
import SettingsView from "./views/SettingsView";
import SignUpView from "./views/SignUpView";
import LoginView from "./views/LoginView";
import DocumentationView from "./views/DocumentationView";
import CalendarView from "./views/CalendarView";
import MapView from "./views/MapView";

const Stack = createStackNavigator();

//export default class App extends React.Component  {

export default function App() {

    //Oprettelse af databasekonfiguration
    const firebaseConfig = {
        apiKey: "AIzaSyAtPVJPHo7MLI7v-dBm2ff2NpA0OH27OqQ",
        authDomain: "exam-project-d82b3.firebaseapp.com",
        databaseURL: "https://exam-project-d82b3.firebaseio.com",
        projectId: "exam-project-d82b3",
        storageBucket: "exam-project-d82b3.appspot.com",
        messagingSenderId: "444057957378",
        appId: "1:444057957378:web:58e4d06465f8b0b009a31b"
    };

   //Vi kontrollerer at det ikke allerede er en initialisert instans av firebase
   //Så unngår vi feilen Farebase App named '[DEFAULT]' already exists.
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged(user =>{
      this.setState({user});
    })


  //oppretter stack navigator som holder styr på navigasjon. Denne delen er ytterste og første del av stacken
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="/start">
          <Stack.Screen
              name="/start"
              component={StartView}
              options={{ title: 'Start' }}
          />
          <Stack.Screen
              name="/main"
              component={MainView}
              options={{ title: 'Main' }}
          />
          <Stack.Screen
              name="/settings"
              component={SettingsView}
              options={{ title: 'Settings' }}
          />

          <Stack.Screen
              name="/signUp"
              component={SignUpView}
              options={{ title: 'Sign Up' }}
          />

          <Stack.Screen
              name="/login"
              component={LoginView}
              options={{ title: 'Login' }}
          />

          <Stack.Screen
              name="/documentation"
              component={DocumentationView}
              options={{ title: 'Documentation' }}
          />

          <Stack.Screen
              name="/calendar"
              component={CalendarView}
              options={{title:'Calendar'}}
          />

          <Stack.Screen
              name="/map"
              component={MapView}
              options={{title:'Map'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

});
