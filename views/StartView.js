import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

export default function StartView({navigation}) {

    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <Image style={styles.image}
                   source={require('../assets/festivol2.jpg')}>
            </Image>

            <Text style={styles.header}>WELCOME!</Text>

            <TouchableOpacity
                style={styles.blueButton}
                onPress={() => navigation.navigate('/login')}>
                <Text  style={styles.blueButtonText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => navigation.navigate('/signUp')}>
                <Text style={styles.signUpText}>Haven't received login information? Tap here!</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17191F',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    component:{
        paddingTop:10
    },

    header:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 10,
    },

    subHeader:{
        color: '#25BDAD',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },

    text:{
        color: '#47525E',
        fontSize: 15,
        marginTop: 30,
    },

    text2:{
        color: '#8190A5',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },

    blueButton:{
        backgroundColor: '#ea534a',
        color: '#47525E',
        width: '75%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pinkButton:{
        backgroundColor: '#F05A89',
        width: '75%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 18,
        paddingHorizontal: 50,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    blueButtonText:{
        fontWeight:'bold',
        fontSize: 17,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signUpButton:{
        width: '100%',
        height: '10%',
        elevation: 8,
        marginTop: 10,
        marginBottom: -15,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signUpText: {
        fontWeight:'bold',
        color: '#ea534a'
    },

    image:{
        marginTop: 50,
        width: 350,
        height: 350,
    },

    image1:{
        marginTop: 0,
        width: 150,
        height: 150,
    },

});
