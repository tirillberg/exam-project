import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Button, Alert, ScrollView} from 'react-native';
import firebase from 'firebase';

export default class EditSettingsView extends React.Component {
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
    },

    label: {
        fontWeight: 'bold',
        width: 100
    },

    textInput: {
        flex: 1,
        height: 40,
        width:'70%',
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },

    subHeader:{
        color: '#25BDAD',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
    },

});
