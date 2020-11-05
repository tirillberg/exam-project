import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Button, Alert, ScrollView, Image} from 'react-native';
import firebase from 'firebase';
import {fsRef} from "../FirebaseConfig";

export default function EditSettingsView ({navigation}, props) {

    //useEffect er her en componentDidMount
    useEffect(
        () => {
            //setter volunteer
            loadVolunteer();
        },
        []
    );

    /*componentDidMount() {
        const uid = this.props.navigation.getParam('uid');
        this.loadVolunteer(uid);
    }*/

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

   /* //Loads the volunteer's data from the ID we get from the navigation
    const loadVolunteer = id => {
        firebase
            .database()
            .ref('/Volunteers/'+uid)
            .once('value', dataObject => {
                const volunteer = dataObject.val();
                const {name, email, password, age} = volunteer;
                this.setState({name, email, password, age});
            });
    };*/

    const [setName, setEmail, setPassword, setAge] = useState(null);

    const handleNameChange = text => setName(text);
    //handleNameChange = text => ({name: text });

    const handleEmailChange = text => setEmail(text);
    //handleEmailChange = text => ({ email: text });

    const handlePasswordChange = text => setPassword(text);
    //handlePasswordChange = text => ({ password: text });

    const handleAgeChange = text => setAge(text);
    //handleAgeChange = text => ({ age: text });

    const [volunteer, setVolunteer] = useState({});

    const updateData = () => {
        // Vi bruger this.props.navigation flere steder så vi pakker den ud én gang for alle
        //const { name, email, password, age } = this.state;
        const [name, email, password, age] = useState({});
        //const uid = navigation.getParam('uid');
        try {
            fsRef
                //tar collection som heter volunteers
                .collection('volunteers')
                //tar dokumentet til uid'en
                .doc('72vFoHaL29f7TdcUvJZvnZhvMRy2')
                //henter dokumentet med get()
                .update({name, email, password, age})
                //setter dataen til this state
                .then((doc)=>{
                    setVolunteer(doc.data());
                    navigation.goBack();
                })
                .catch((error)=>{
                        console.log('error updating the user', error);
                    }
                )
        } catch (error) {
            Alert.alert(`Error: ${error.message}`);
        }
    };

        //const { name, email, password, age } = this.state;
    const [name, email, password, age] = useState({});

    return (
            <View style={styles.container}>

                    <Text style={styles.subHeader}>EDIT YOUR PROFILE</Text>


                <Image
                    style={styles.image}
                    source={{uri: 'https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'}}
                />

                    <View style={styles.row}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={handleNameChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            placeholderTextColor = 'white'
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={handleEmailChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            placeholderTextColor = 'white'
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            value={password}
                            onChangeText={handlePasswordChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            secureTextEntry={true}
                            placeholderTextColor = 'white'
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput
                            value={age}
                            onChangeText={handleAgeChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            placeholderTextColor = 'white'
                        />
                    </View>

                <TouchableOpacity
                    style={styles.pinkButton}
                    onPress={updateData}>
                    <Text style={styles.pinkButtonText}>Update changes</Text>
                </TouchableOpacity>

            </View>
        );
}

/*export default class EditSettingsView extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        age: '',
    };

    componentDidMount() {
        const uid = this.props.navigation.getParam('uid');
        this.loadVolunteer(uid);
    }

    //Loads the volunteer's data from the ID we get from the navigation
    loadVolunteer = id => {
        firebase
            .database()
            .ref('/Volunteers/'+uid)
            .once('value', dataObject => {
                const volunteer = dataObject.val();
                const {name, email, password, age} = volunteer;
                this.setState({name, email, password, age});
            });
    };

    handleNameChange = text => this.setState({ name: text });

    handleEmailChange = text => this.setState({ email: text });

    handlePasswordChange = text => this.setState({ password: text });

    handleAgeChange = text => this.setState({ age: text });

    updateData = () => {
        // Vi bruger this.props.navigation flere steder så vi pakker den ud én gang for alle
        const { navigation } = this.props;
        const { name, email, password, age } = this.state;
        const uid = navigation.getParam('uid');
        try {
            firebase
                .database()
                .ref(`/Volunteers/${uid}`)
                // Vi bruger update, så kun de felter vi angiver, bliver ændret
                .update({name, email, password, age});
            // Når den frivillige er ændret, går vi tilbage.
            Alert.alert("Info updated");
            navigation.goBack();
        } catch (error) {
            Alert.alert(`Error: ${error.message}`);
        }
    };

    render() {
        const { name, email, password, age } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>

                    <Text style={styles.subHeader}>EDIT YOUR PROFILE</Text>

                    <View style={styles.row}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={this.handleNameChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            placeholderTextColor = 'white'
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={this.handleEmailChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            placeholderTextColor = 'white'
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            value={password}
                            onChangeText={this.handlePasswordChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            secureTextEntry={true}
                            placeholderTextColor = 'white'
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput
                            value={age}
                            onChangeText={this.handleAgeChange}
                            style={styles.textInput}
                            selectionColor={'#F05A89'}
                            placeholderTextColor = 'white'
                        />
                    </View>
                    <Button title="Press to update your info" onPress={this.updateData} />
                </ScrollView>
            </View>
        );
    }
}*/

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        backgroundColor: '#17191F',
        alignItems: 'center',
        //justifyContent: 'center',
        //paddingHorizontal: 50,
        flexGrow: 100,
    },

    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        /*borderWidth: 1,
        borderColor: 'white',
        width: 300,*/
    },

    label: {
        width: 100,
        fontWeight: 'bold',
        color: '#25BDAD',
        fontSize: 17,
        marginLeft: 30,
        marginTop: 13,
    },

    value: {
        flex: 1,
        color: 'white',
        fontSize: 17,
    },

    header:{
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 60,
    },

    subHeader:{
        //color: '#25BDAD',
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 50,
        marginLeft: 10,
    },

    pinkButton:{
        backgroundColor: '#F05A89',
        color: '#47525E',
        width: '65%',
        height: '7.5%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 75,
        marginTop: 30,
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
        height: 37,
        width: 240,
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20,
        color: 'white',
        marginLeft: -10,
    },

    image:{
        marginTop: 5,
        marginBottom: 40,
        width: 115,
        height: 115,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 60,
    },

});
