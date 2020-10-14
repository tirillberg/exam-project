import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

export default function InformationView({navigation}) {


    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <Text style={styles.header}>INFORMATION</Text>

            <Text style={styles.subHeader}>Aldersgrense og vergeordning</Text>

            <ScrollView style={styles.StyledView}>
                <Text style={styles.text1}>
                    Til de fleste konsertene er det aldersgrense som følger kommunens skjenkeregler og konsertstedets praksis. Aldersgrense for de enkelte konserter er oppgitt i konsertomtalen på bergenlive.no. Dette gjelder også for konserter på Bergenhus Festning - Koengen, Plenen og Bastionen.

                    Som en hovedregel henviser vi til de enkelte konsertomtalene på bergenlive.no for informasjon om hvilken aldersgrense som gjelder på den aktuelle konserten. På disse konsertartiklene vil du også finne link til elektronisk vergeskjema på de arrangementene hvor dette er tilgjengelig.

                    NB – undersøk alltid gjeldende aldersgrense før du kjøper billett til en konsert.

                </Text>

                <Text style={styles.text2}>
                    Vergeordning

                </Text>

                <Text style={styles.text1}>
                    Til enkelte konserter kan personer under oppgitt aldersgrense komme inn i følge med en voksen person som verge. Til konserter med vergeordning må det fylles ut og sendes inn vergeskjema før konserten. Vergeskjema finner du i artikkelsiden for den enkelte konsert på bergenlive.no. Kun vergeskjema fra Bergen Live gjelder.

                    Vi presiserer følgende:

                    • Verge skal også kjøpe billett på vanlig måte.
                    • Verge kan ikke nyte alkohol/rusmidler før og under konserten.
                    • Verge skal være minimum 23 år.
                    • Verge har ansvar for at den/de han/hun er verge for ikke benytter rusmidler før eller under konserten.
                    • Verge kan ha ansvar for maksimum 2 mindreårige.
                    • Det vil være begrenset antall plasser tilgjengelig for vergeordning.
                    • Bergen Live står fritt til å sette nedre aldersgrense for vergeordingen.

                    Har du spørsmål om vergeordningen, send e-post til: post@bergenlive.no

                </Text>

            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    header:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 20,
    },

    subHeader:{
        color: '#FF6400',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        alignItems: 'center',
    },

    text1:{
        color: 'white',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },

    text2:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    orangeButton:{
        backgroundColor: '#FF6400',
        color: '#47525E',
        width: '73%',
        height: '7%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 12,
        paddingHorizontal: 120,
        marginTop: 20,
    },

    orangeButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15.5,
    },

    whiteButton:{
        backgroundColor: '#FFFFFF',
        color: '#47525E',
        width: '73%',
        height: '7%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 12,
        paddingHorizontal: 110,
        marginTop: 10,
        marginBottom: 10,
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

    StyledView:{
        height:380,
    }

});

