import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

export default function MainView({navigation}) {

    return (
        /*Her har vi et View med klassenavnet container og der er en enkel render View*/
        <View style={styles.container}>

            {/*<Image
                style={styles.image}
                source={{uri: 'https://d3tpltn2ezya42.cloudfront.net/media/p/556x200/1489657373/logo-desktop.png'}}
            />*/}

            <Image style={styles.image} source={require('../assets/image2.png')}></Image>

            <Text style={styles.subHeader}>LATEST NEWS!</Text>

            <ScrollView style={styles.scrollView}>

                <Text style={styles.text3}>
                    VI TRENGER EKSTRA HJELP PÅ LØRDAG
                </Text>

                <Text style={styles.text1}>På lørdag har vi manko på folk, så hvis du har tid til å jobbe,
                ta kontakt med Simon på +4799999999.
                </Text>

                <Text style={styles.text3}>
                    OPPDATERING
                </Text>

                <Text style={styles.text1}>Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering
                </Text>

                <Text style={styles.text3}>
                    HAR NOEN SETT XXX?
                </Text>

                <Text style={styles.text1}>Vi har fortsatt ikke funnet igjen XXX.
                    Hvis du ser den, vennligst lever den tilbake til førstehjelpsteltet.
                </Text>

                <Text style={styles.text3}>
                    OPPDATERING
                </Text>

                <Text style={styles.text1}>Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering
                </Text>

                <Text style={styles.text3}>
                    OPPDATERING
                </Text>

                <Text style={styles.text1}>Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering
                </Text>

                <Text style={styles.text3}>
                    OPPDATERING
                </Text>

                <Text style={styles.text1}>Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering
                </Text>

                <Text style={styles.text3}>
                    OPPDATERING
                </Text>

                <Text style={styles.text1}>Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering Oppdatering
                </Text>

            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17191F',
        alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    list:{
        backgroundColor: 'black',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
        marginBottom: 20,
    },

    listItem:{
        backgroundColor: 'black',
        width: '100%',
        borderWidth: 0,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
    },

    header:{
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 30,
    },

    subHeader:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 20,
    },

    text:{
        color: '#47525E',
        fontSize: 15,
        marginTop: 40,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },

    text1:{
        color: 'white',
        fontSize: 15,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },

    text2:{
        color: '#47525E',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },

    text3:{
        //color: '#25BDAD',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        textDecorationLine: 'underline',
        textDecorationColor: '#25BDAD',
        //textDecorationColor: '#F05A89',
    },

    blueButton:{
        backgroundColor: '#25BDAD',
        color: '#47525E',
        width: '60%',
        height: '7%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 5,
        paddingHorizontal: 30,
        marginTop: 10,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image:{
        marginTop: 40,
        width: '90%',
        height: 100,
        marginBottom: 20,
    },

    scrollView:{
        height: 50,
        marginLeft: 10,
        marginRight: 3,
        marginBottom: 15,
        //backgroundColor: '#2E223A',
        borderWidth: 1,
        borderColor: '#F05A89',
    }

});

