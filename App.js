import React from 'react'
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartView from "./views/StartView";
import SignUpView from "./views/SignUpView";
import LoginView from "./views/LoginView";
import AppBottomNav from "./views/AppBottomNav";
import ConsentView from "./views/ConsentView";

const Stack = createStackNavigator();

export default function App () {

        //oppretter stack navigator som holder styr på navigasjon. Denne delen er ytterste og første del av stacken
        return (
            //Her deklareres alle de views'ene om vises, og ingenting annet vises.
            //De views som vises ut over disse er så vist innad i et eller flere av disse views.
            //Fx i /nav er de andre vist.
            <NavigationContainer>
                <Stack.Navigator initialRouteName='/start'>
                    <Stack.Screen
                        name='/start'
                        component={StartView}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='/nav'
                        component={AppBottomNav}
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
