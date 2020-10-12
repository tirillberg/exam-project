import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartView from "./views/StartView";
import MainView from "./views/MainView";
import SettingsView from "./views/SettingsView";
import SignUpView from "./views/SignUpView";
import LoginView from "./views/LoginView";
import DocumentationView from "./views/DocumentationView";


const Stack = createStackNavigator();

export default function App() {

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
