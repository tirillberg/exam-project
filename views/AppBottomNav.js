// Denne TabNavigator holder styr på det ytterste nivået av navigasjon i appen.
// Det er altså menyen som ligger nede i systemet, og skal hjelpe med å navigere.
import React from 'react';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import MainView from "./MainView";
import {AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";
import CalendarView from "./CalendarView";
import MapView from "./MapView";
import InformationView from "./InformationView";
import SettingsView from "./SettingsView";

export default function AppBottomNav () {
    return <BottomNav/>;
}

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

const BottomNav = createAppContainer(TabNavigator);


