import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

export default function InformationView({navigation}) {


    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <ScrollView
                contentContainerStyle={styles.styledView}
                //options={{ onScrollEndDrag: true }}
                //https://reactnative.dev/docs/0.54/scrollview
                //https://reactnative.dev/docs/0.54/scrollview#onmomentumscrollbegin
            >

            <Text style={styles.header}>INFORMATION</Text>

            <Text style={styles.subHeaderPink}>Status på kommende arrangementer</Text>

            {/*<ScrollView style={styles.StyledView}>*/}

                <Text style={styles.text3}>
                    Fra 12. mars 2020 er en rekke av våre arrangementer berørt av smitteverntiltak vedtatt av nasjonale helsemyndigheter for å minimere spredningen av viruset Covid-19. Oversikten under oppdateres fortløpende med informasjon om arrangementer som er berørt.
                </Text>

                <Text style={styles.text1}>
                    Der det er lagt inn ny dato i 2020 er det viktig å understreke at det er knyttet stor usikkerhet til om det i det hele tatt vil bli tillatt å avholde arrangementer med større folkemengder i løpet av 2020. Nye datoer i 2020 må således betraktes som tentative, og selvsagt prisgitt nødvendige tillatelser.
                </Text>

                <Text style={styles.text1}>
                    Sikkerheten til gjester, artister og ansatte har Bergen Live sin høyeste prioritet. Vi følger til enhver tid de vedtak som blir gjort av Bergen Kommune og nasjonale helsemyndigheter.
                </Text>

                <Text style={styles.text1}>
                    Vi oppfordrer deg som har kjøpt billett til et av våre arrangementer til å sikre at kontaktinformasjonen på din brukerkonto på Ticketmaster.no er oppdatert, slik at vi kan kontakte deg via e-post eller SMS med info om endringer.
                </Text>

                <Text style={styles.text1}>
                    Vi tar kontakt med alle kunder fortløpende med informasjon om enkeltarrangementene som berøres. Vi ber om publikums forståelse for at dette arbeidet vil ta noe tid.
                </Text>

            {/*</ScrollView>*/}

                <Text style={styles.subHeaderBlue}>Aldersgrense og vergeordning</Text>

                {/*<ScrollView style={styles.StyledView}>*/}
                    <Text style={styles.text1}>
                        Til de fleste konsertene er det aldersgrense som følger kommunens skjenkeregler og konsertstedets praksis. Aldersgrense for de enkelte konserter er oppgitt i konsertomtalen på bergenlive.no. Dette gjelder også for konserter på Bergenhus Festning - Koengen, Plenen og Bastionen.
                    </Text>

                    <Text style={styles.text1}>
                        Som en hovedregel henviser vi til de enkelte konsertomtalene på bergenlive.no for informasjon om hvilken aldersgrense som gjelder på den aktuelle konserten. På disse konsertartiklene vil du også finne link til elektronisk vergeskjema på de arrangementene hvor dette er tilgjengelig.
                    </Text>

                    <Text style={styles.text1}>
                            NB – undersøk alltid gjeldende aldersgrense før du kjøper billett til en konsert.
                    </Text>

                    <Text style={styles.text2}>
                        Vergeordning
                    </Text>

                    <Text style={styles.text1}>
                        Til enkelte konserter kan personer under oppgitt aldersgrense komme inn i følge med en voksen person som verge. Til konserter med vergeordning må det fylles ut og sendes inn vergeskjema før konserten. Vergeskjema finner du i artikkelsiden for den enkelte konsert på bergenlive.no. Kun vergeskjema fra Bergen Live gjelder.
                    </Text>

                    <Text style={styles.text1}>
                        Vi presiserer følgende:
                    </Text>

                    <Text style={styles.text1}>

                        • Verge skal også kjøpe billett på vanlig måte.
                        • Verge kan ikke nyte alkohol/rusmidler før og under konserten.
                        • Verge skal være minimum 23 år.
                        • Verge har ansvar for at den/de han/hun er verge for ikke benytter rusmidler før eller under konserten.
                        • Verge kan ha ansvar for maksimum 2 mindreårige.
                        • Det vil være begrenset antall plasser tilgjengelig for vergeordning.
                        • Bergen Live står fritt til å sette nedre aldersgrense for vergeordingen.

                    </Text>

                    <Text style={styles.text1}>
                        Har du spørsmål om vergeordningen, send e-post til: post@bergenlive.no
                    </Text>

                {/*</ScrollView>*/}

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

    header:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 70,
    },

    subHeaderBlue:{
        color: '#25BDAD',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
        alignItems: 'center',
        marginLeft: 10,
    },

    subHeaderPink:{
        color: '#F05A89',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
        alignItems: 'center',
        marginLeft: 10,
    },

    text1:{
        color: 'white',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    text2:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    text3:{
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    blueButton:{
        backgroundColor: '#25BDAD',
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

    blueButtonText: {
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

    styledView:{
        height:380,
    }

});

