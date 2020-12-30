import React, from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import { auth, fsRef } from './../FirebaseConfig';
import {useUserStore} from '../store/UserStore';

export default function ConsentView({navigation}) {

    //henter den globale hook/user fra UserStore
    const {user, setUser} = useUserStore(
        state => ({user: state.user, setUser: state.setUser })
    );

    //denne kjøres når man trykker på "I accept"-knappen.
    const handleConsent = async () => {
        //finner brukeren
        const volunteerRef = fsRef.collection("volunteers").doc(user.id);
        //når brukeren oppdateres så endres consent til true:
        await volunteerRef.update(
            {
                consent: true,
            }
        ).then(()=> {
        console.log('Update consent');
            //ønsker å oppdatere consent globalt:
            setUser({
                name: user.name,
                email: user.email,
                age: user.age,
                id: user.id,
                consent: true,
            });
            navigation.navigate('/nav');
        }).catch( e => {
            console.log('error: ',e)
                navigation.navigate('/start');
            }
        )
    }

        return (
            /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
            <View style={styles.container}>

                <ScrollView style={styles.styledView}>

                    <Image style={styles.image1} source={require('../assets/image2.png')}></Image>

                <Text style={styles.header}>Før du kan gå videre må du lese gjennom noen instrukser</Text>

                <Text style={styles.subHeader}>TIL FRIVILLIGE, PUBLIKUMSVERTER OG SERVERINGSPERSONELL</Text>

                    <Text style={styles.text2}>
                        DIN ROLLE
                    </Text>
                    <Text style={styles.text1}>
                        Som frivillig, er du ikke ansvarlig for sikkerheten, men du er en viktig støttespiller til sikkerhetspersonalet.
                        Jo mer du hjelper til, jo bedre er det. Her følger noen enkle instrukser som du kan bære med deg til enhver tid.
                    </Text>
                    <Text style={styles.text1}>
                        • Unnlat å bruke telefonen til private SMS‘er og samtaler i arbeidstiden.
                    </Text>
                    <Text style={styles.text1}>
                        • Ikke ta bilder av artister når du er på jobb.
                    </Text>
                    <Text style={styles.text1}>
                        • Ikke røyk eller spis når du står på post.
                    </Text>

                    <Text style={styles.text2}>
                        I EN NORMAL SITUASJON
                    </Text>
                    <Text style={styles.text1}>
                        Vær alltid oppmerksom på at alt rundt deg er normalt.
                        Her gjelder alt fra steder det er trangt og vanskelig å bevege seg, om du ser folk etterlater
                        seg objekter eller om det er konstruksjoner som er overbelastet av mennesker.
                    </Text>
                    <Text style={styles.text1}>
                        • Gi beskjed til din overordnede
                    </Text>
                    <Text style={styles.text1}>
                        • Bli på stedet eller hos personene
                    </Text>
                    <Text style={styles.text1}>
                        • Noter ned det du har sett
                    </Text>

                    <Text style={styles.text2}>
                        DERSOM DU KOMMER OPP I EN KONFLIKTSITUASJON
                    </Text>
                    <Text style={styles.text1}>
                        Din sikkerhet kommer først, deretter dine kollegaer og gjestene.
                        Vi forventer at du handler, men du skal ikke utsette deg selv for fare.
                    </Text>
                    <Text style={styles.text1}>
                        • Tilkall hjelp
                    </Text>
                    <Text style={styles.text1}>
                        • Trekk deg tilbake
                    </Text>
                    <Text style={styles.text1}>
                        • Vurder hvor farlig situasjonen er
                    </Text>

                    <Text style={styles.text2}>
                        BRANN
                    </Text>
                    <Text style={styles.text3}>
                        Dersom du oppdager brann skal du:
                    </Text>
                    <Text style={styles.text1}>
                        • Varsle andre og utløse alarm
                    </Text>
                    <Text style={styles.text1}>
                        • Kontakte brannvernleder og informere om hvor det brenner, eventuelt hva som
                        brenner og om noen eller alle er evakuert
                    </Text>
                    <Text style={styles.text1}>
                        • Forsøke å slokke brannen
                    </Text>
                    <Text style={styles.text3}>
                        MERK! REKKEFØLGE VARSLE/ SLOKKE/REDDE MÅ VURDERES I HVERT ENKELT TILFELLE!
                    </Text>

                    <Text style={styles.text2}>
                        SLUKNINGSMATERIELL
                    </Text>
                    <Text style={styles.text3}>
                        Det vil være håndslukkere tilgjengelig alle steder der brann kan oppstå:
                    </Text>
                    <Text style={styles.text1}>
                        • Ved/i bygninger
                    </Text>
                    <Text style={styles.text1}>
                        • Ved og på scene
                    </Text>
                    <Text style={styles.text1}>
                        • Ved mikseposisjon
                    </Text>
                    <Text style={styles.text1}>
                        • I serverings- og salgspunkter
                    </Text>
                    <Text style={styles.text1}>
                        • Ved åpne containere i publikumsområdene
                    </Text>
                    <Text style={styles.text3}>
                        Der håndslukker ikke er synlig plassert markeres posisjon med skilt:
                    </Text>

                    <Image style={styles.image2} source={require('../assets/demo1.png')}></Image>

                    <Text style={styles.text2}>
                        SIGNALEMENT
                    </Text>
                    <Text style={styles.text3}>
                        Når du skal fortelle din overordnede hvem du leter etter, eller du skal avgi vitneutsagn,
                        er det en fordel å notere ned signalement:
                    </Text>
                    <Text style={styles.text1}>
                        GENERELT:
                        Kjønn, alder kroppsbygning
                    </Text>
                    <Text style={styles.text1}>
                        UTSEENDE:
                        Hudfarge, hårfarge, frisyre, øyenfarge, skjeggtype, særlige kjennetegn som tatoveringer og lignende
                    </Text>

                    <Text style={styles.text2}>
                        SKADER
                    </Text>
                    <Text style={styles.text3}>
                        Gjør deg kjent med plasseringen av førstehjelpsstasjonene og annen medisinsk beredskap.
                    </Text>
                    <Text style={styles.text1}>
                        • Tilkall hjelp
                    </Text>
                    <Text style={styles.text1}>
                        • Tilkall din overordnede
                    </Text>
                    <Text style={styles.text1}>
                        • Få et overblikk over situasjonen
                    </Text>
                    <Text style={styles.text1}>
                        • Sett i gang med førstehjelp
                    </Text>
                    <Text style={styles.text1}>
                        • Sperr av området
                    </Text>
                    <Text style={styles.text1}>
                        • Bli ved pasienten(e) til hjelpen kommer
                    </Text>

                </ScrollView>

                <TouchableOpacity
                    style={styles.pinkButton}
                    onPress={handleConsent}>
                    <Text style={styles.pinkButtonText}>I agree</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.whiteButton}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.blueButtonText}>I disagree</Text>
                </TouchableOpacity>

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
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20,
    },

    subHeader:{
        color: '#25BDAD',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        alignItems: 'center',
    },

    text1:{
        color: 'white',
        marginBottom: 10,
        marginRight: 15,
    },

    text2:{
        color: '#F05A89',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        marginBottom: 10,
        marginRight: 15,
    },

    text3:{
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: 15,
    },

    pinkButton:{
        backgroundColor: '#F05A89',
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

    pinkButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15.5,
        fontWeight: 'bold',
        color: 'white',
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
        paddingVertical: 15,
        paddingHorizontal: 115,
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
        marginLeft: 15,
        marginRight: 15,
    },

    image1:{
        marginTop: 40,
        width: '90%',
        height: 100,
        marginBottom: 20,
    },

    image2:{
        width: 115,
        height: 115,
        borderColor: 'white',
        borderWidth: 1,
        //borderRadius: 60,
    },

});

