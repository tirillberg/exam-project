import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

//export default class CalendarView extends Component {
export default function CalendarView ({navigation}, props) {

    /*constructor(props) {
        //super(props);
        this.state = {
            selectedStartDate: null,
        };

        this.onDateChange = this.onDateChange.bind(this);
    }*/

    /*onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }*/

    const [selectedStartDate, setSelectedStartDate] = useState({});

    const onDateChange = date => {
        setSelectedStartDate(selectedStartDate);
    }

    //render() {
    //const { selectedStartDate } = this.state;

    //Denne tror jeg må endres...
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return (
        <View style={styles.container}>

            <Text style={styles.header}>SCHEDULE</Text>

            <Text style={styles.subHeader}>Check here for when you are working</Text>


            <CalendarPicker
                //onDateChange={this.onDateChange}
                onDateChange={onDateChange}
                startFromMonday={true}
                //allowRangeSelection={true}
                /*previousTitleStyle={{
                    color: '#25BDAD'
                }}*/
                selectedDayTextColor={'white'}
                selectedDayColor={'#F05A89'}
                todayBackgroundColor={'grey'}
                dayLabelsWrapper={{
                    color: 'white'
                }}
                textStyle={{
                    //fontFamily: 'Cochin',
                    color: 'white',
                }}
            />

            <View>
                {/*<Text style={styles.text1}>SELECTED DATE:{' '+ startDate }</Text>*/}

                <Text style={styles.text1}>*Here it is supposed to say who is working this day*</Text>

                <Text style={styles.text2}>Do you have questions regarding your shifts or whats to swap with anyone?
                    Contact Simon at +4799999999</Text>
            </View>

        </View>
    );
    //}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
        backgroundColor: '#17191F',
        //backgroundColor: '#2E223A',
        alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    header:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20,
    },

    subHeader:{
        color: '#25BDAD',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        alignItems: 'center',
    },

    text1:{
        color: '#F05A89',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },

    text2:{
        color: 'white',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold',
        //borderWidth: 0.5,
        //borderColor: '#25BDAD',
    },

    blueButton:{
        backgroundColor: '#25BDAD',
        color: '#47525E',
        width: '70%',
        height: '7%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
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
        width: '70%',
        height: '7%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 110,
        marginTop: 20,
        marginBottom: 50,
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

});
