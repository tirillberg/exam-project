import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

export default function MainView({navigation}) {

    //Use state hook for goal list and for adding new goal to list
    const [list, settings] = useState([
        {
            id: 1,
            name: 'Name: '+'Volunteer 1',
            username: 'Username: '+'volunteer1',
            password: 'Password: '+'********',
            email: 'Email: '+'volunteer@email.com',
            birthday: 'Birthday: '+'10.10.2001',
        },

    ]);

    return (
        /*Her har vi et View med klassenavnet container og der er en enkel render View*/
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={{uri: 'https://d3tpltn2ezya42.cloudfront.net/media/p/556x200/1489657373/logo-desktop.png'}}
            />

            <Text style={styles.subHeader}>APP FOR FRIVILLIGE</Text>

            <Text style={styles.text1}>There are {list.length} volunteers registered!</Text>

            <TouchableOpacity
                style={styles.orangeButton}
                //navigate sier jeg ønsker å gå til den skjermen,
                // -->men hvis man er på den skjermen så trenger man ikke gå til den skjermen
                //push --> legger siden oppå
                //back --> går ned en side igjen
                onPress={() => navigation.push('/settings',
                    {
                        list: list,
                        settings: settings,
                    })}>
                <Text>Settings</Text>
            </TouchableOpacity>

            {/*Check if goal list is empty or not*/}
            {list.length > 0 ?
                (
                    <View style={styles.list}>
                        {/*Iterating through list, return view for each goal item*/}
                        {list.map(volunteer=>{
                            return (
                                <TouchableOpacity
                                    style={styles.listItem}
                                    key={volunteer.id}
                                    onPress={()=>navigation.push('/settings',
                                        {
                                            // volunteer: volunteer, <-- dette betyr det samme som under
                                            id: volunteer.id,
                                            name: volunteer.name,
                                            username: volunteer.username,
                                            password: volunteer.password,
                                            email: volunteer.email,
                                            birthday: volunteer.birthday,

                                            //metodene som er kaldt lenger oppe:
                                            //editGoalList: settings,
                                            //list: list,

                                        })} >

                                    <Text style={styles.text2}>
                                        {volunteer.name}
                                    </Text>

                                    <Text style={styles.text2}>
                                        {volunteer.username}
                                    </Text>

                                    <Text style={styles.text2}>
                                        {volunteer.password}
                                    </Text>

                                    <Text style={styles.text2}>
                                        {volunteer.email}
                                    </Text>

                                    <Text style={styles.text2}>
                                        {volunteer.birthday}
                                    </Text>

                                </TouchableOpacity>
                            )
                        })}
                    </View>
                ) :
                (
                    <View>
                        <Text>
                            Tom liste
                        </Text>
                    </View>
                )
            }

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    list:{
        backgroundColor: '#F8F4EC',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8190A5',
    },

    listItem:{
        backgroundColor: '#F8F4EC',
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
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 50,
    },

    text:{
        color: '#47525E',
        fontSize: 15,
        marginTop: 40,
    },

    text1:{
        color: 'white',
        fontSize: 15,
        marginBottom: 20,
    },

    text2:{
        color: '#47525E',
        marginBottom: 5,
        marginLeft: 15,
    },


    orangeButton:{
        backgroundColor: '#FDDFAC',
        color: '#47525E',
        width: '60%',
        height: '10%',
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
        marginTop: 10,
        width: '90%',
        height: 50,
    },

});

