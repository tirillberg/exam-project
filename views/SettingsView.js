import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet, TextInput, Alert} from 'react-native';
import { fsRef } from './../FirebaseConfig';
import {useUserStore} from '../store/UserStore';

export default function SettingsView () {

    //Her hentes den global hook, altså at vi setter brukeren, så kan vi bruke denne brukeren hvor som helst i appen/programmet,
    //og ikke kun i dette View.
    const {user, setUser} = useUserStore(
        state => ({user: state.user, setUser: state.setUser })
    );

    //nye hook opprettes:
    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    //componentDidMount
    //fetching global data og setter dette til det nye userobjektet
    useEffect(()=>{
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
    },[]);


    const updateUser = (newUser) => {
        try {
            fsRef
                //tar collection som heter volunteers
                .collection('volunteers')
                //tar dokumentet til uid'en
                .doc(user.id)
                //henter dokumentet med get()
                .update({
                    name:newUser.name,
                    email:newUser.email,
                    age: newUser.age
                })
                //setter dataen til this state
                .then((doc)=>{
                    setUser(newUser);
                })
                .catch((error)=>{
                        console.log('error updating the user', error);
                    }
                )

        } catch (error) {
            Alert.alert(`Error: ${error.message}`);
        }
    };

    function handleEdit() {
        if (isEditing){
            //setUser globalt og i firebase
            const newUser = {
                name:name,
                email:email,
                age:age,
                id:user.id,
                consent:user.consent,
            }
            updateUser(newUser);
        }

        //"!" = motsatte
        setIsEditing(!isEditing);
    }

    //Dette er dersom userobjektet ikke finnes globalt. Det skal ikke skje.
        if (!user) {
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

                {/*? - questions mark means one thing or another - isEditing is true then the below is showing. */}
                {/*Basically an if/else statement. Before the colon: if, after color: else*/}
                {isEditing?
                    <View>
                        <TextInput
                        value={name}
                        //keyboardType = 'email-address'
                        onChangeText={(string) => setName(string)}
                        placeholder=' name'
                        placeholderTextColor = 'white'
                        style={styles.textInput}
                        selectionColor={'#F05A89'}
                        />
                        <TextInput
                        value={email}
                        //keyboardType = 'name'
                        onChangeText={(string) => setEmail(string)}
                        placeholder=' email'
                        placeholderTextColor = 'white'
                        style={styles.textInput}
                        selectionColor={'#F05A89'}
                        />
                        <TextInput
                        value={age}
                        //keyboardType = 'name'
                        onChangeText={(string) => setAge(string)}
                        placeholder=' age'
                        placeholderTextColor = 'white'
                        style={styles.textInput}
                        selectionColor={'#F05A89'}
                        />
                    </View>
                    :
                    //Not editing, then the below is showing
                    <View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Name</Text>
                        <Text style={styles.value}>{user.name}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>{user.email}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Age</Text>
                        <Text style={styles.value}>{user.age}</Text>
                    </View>
                    </View>
                }

                <TouchableOpacity
                    style={styles.pinkButton}
                    onPress={handleEdit}>
                    {/*Knapp: isEditing er true så vises "Save changes", mens hvis den er false så vises "Edit your profile"*/}
                    <Text style={styles.pinkButtonText}>{isEditing?'Save changes':'Edit your profile'}</Text>
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
        marginTop: 25,
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
        marginBottom: 40,
        width: 115,
        height: 115,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 60,
    },

});

