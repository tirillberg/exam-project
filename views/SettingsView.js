import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { auth, fsRef } from './../FirebaseConfig';

export default function SettingsView ({navigation}) {

    const [volunteer, setVolunteer] = useState({});

    //useEffect er her en componentDidMount
    useEffect(
        () => {
            //setter volunteer
            loadVolunteer();
        },
        []
    );

    function loadVolunteer() {
        //kaller firestore
        fsRef
            //tar collection som heter volunteers
            .collection('volunteers')
            //tar dokumentet til uid'en
            .doc('72vFoHaL29f7TdcUvJZvnZhvMRy2')
            //henter dokumentet med get()
            .get()
            //setter dataen til this state
            .then((doc)=>{
            setVolunteer(doc.data());
        })
            .catch((error)=>{
                console.log('error getting the user', error);
                }
            )
    };

    function handleEdit() {
        // Vi navigerer videre til EditVolunteer skærmen og sender ID med
        //navigation.goBack();
        navigation.navigate('/editSettings');
    }

        if (!volunteer) {
            return <Text style ={styles.subHeader}>No data</Text>;
        }
        return (
            <View style={styles.container}>

                <Text style={styles.header}>YOUR PROFILE</Text>

                <Image
                    style={styles.image}
                    source={{uri: 'https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'}}
                />

                {/*<Image
                    style={styles.image}
                    source={{uri: 'https://lh3.googleusercontent.com/proxy/EP-IC31Lg4XEV8RjMFCmpeyE07vp-' +
                            'FBN5ZIJafhDoSaVdkz1R_qH7seIHxXHgP570MZZkhgyBBMsZTla6vNmTFBKT5bmcXAkGnBgqzdVcCktOh7Nex4'}}
                />*/}

                <View style={styles.row}>
                    <Text style={styles.label}>Name</Text>
                    <Text style={styles.value}>{volunteer.name}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>{volunteer.email}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Password</Text>
                    <Text style={styles.value}>{volunteer.password}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Age</Text>
                    <Text style={styles.value}>{volunteer.age}</Text>
                </View>

                <TouchableOpacity
                    style={styles.pinkButton}
                    onPress={handleEdit}>
                    {/*onPress={() => navigation.navigate('/editSettings')}>*/}
                    <Text style={styles.pinkButtonText}>Edit your profile</Text>
                </TouchableOpacity>
            </View>
        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        backgroundColor: '#17191F',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        width: 300,
    },

    label: {
        width: 100,
        fontWeight: 'bold',
        color: '#25BDAD',
        fontSize: 17,
        marginLeft: 5,
    },

    value: {
        flex: 1,
        color: 'white',
        fontSize: 17,
        marginLeft: 35,
    },

    header:{
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 60,
    },

    subHeader:{
        color: '#25BDAD',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
    },

    text:{
        color: 'white',
        fontSize: 15,
    },

    text2:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },

    pinkButton:{
        backgroundColor: '#F05A89',
        color: '#47525E',
        width: '60%',
        height: '7.5%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 68,
        marginTop: 45,
        marginBottom: 150,
    },

    pinkButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
    },

    whiteButton:{
        backgroundColor: '#FFFFFF',
        color: '#47525E',
        width: '100%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 83,
        marginTop: 20,
    },

    backButton:{
        color: 'white',
        width: '100%',
        height: '10%',
        elevation: 8,
        marginTop: 30,
        marginRight: 350,
        marginBottom: -35,
    },

    textInput: {
        height: 40,
        width:300,
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
    },

    image:{
        //marginTop: 5,
        marginBottom: 40,
        width: 115,
        height: 115,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 60,
    },

});

