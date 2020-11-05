import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Map from "react-native-maps";
import {StyleSheet} from "react-native";

export default function MapView () {

        return (
                <Map
                //flex shows that it fills the whole screen
                style={{flex: 1}}
                region={{
                    //By justifying the latitude and longitude you can choose whatever place in the world
                    latitude: 60.3998362,
                    longitude: 5.3189241,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421
                }}
                //Enabeling user location
                showsUserLocation={true}
            />
            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
        backgroundColor: '#17191F',
        //backgroundColor: '#2E223A',
        alignItems: 'center',
    },

    component: {
        paddingTop: 10
    },

    header: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20,
    },

    subHeader: {
        color: '#25BDAD',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        alignItems: 'center',
    },
});
