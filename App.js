import React from 'react'
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartView from "./views/StartView";
import MainView from "./views/MainView";
import SettingsView from "./views/SettingsView";
import SignUpView from "./views/SignUpView";
import LoginView from "./views/LoginView";
import CalendarView from "./views/CalendarView";
import MapView from "./views/MapView";
import ConsentView from "./views/ConsentView";
import EditSettingsView from "./views/EditSettingsView";

const Stack = createStackNavigator();

export default function App () {

    //render() {
        //oppretter stack navigator som holder styr på navigasjon. Denne delen er ytterste og første del av stacken
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='/start'>
                    <Stack.Screen
                        name='/start'
                        component={StartView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/main'
                        component={MainView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/settings'
                        component={SettingsView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/signUp'
                        component={SignUpView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/login'
                        component={LoginView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/consent'
                        component={ConsentView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/calendar'
                        component={CalendarView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/map'
                        component={MapView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/editSettings'
                        component={EditSettingsView}
                        options={{ headerShown: false }}
                    />

                </Stack.Navigator>
            </NavigationContainer>

        );

    //}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

});
