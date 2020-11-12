import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import WeeklyCalendar from "react-native-weekly-calendar";

export default function CalendarView() {

    const events = [
        { 'start': '2020-11-02 09:00:00', 'duration': '04:00:00', 'note': 'Bar - Marcus and Sophia' },
        { 'start': '2020-11-02 09:00:00', 'duration': '04:00:00', 'note': 'Entrance - Henri and Lewis' },
        { 'start': '2020-11-02 09:00:00', 'duration': '04:00:00', 'note': 'Restaurant - Martin and Anna' },
        { 'start': '2020-11-02 09:00:00', 'duration': '04:00:00', 'note': 'Front stage security - Levi and Eve' },
        { 'start': '2020-11-03 09:00:00', 'duration': '04:00:00', 'note': 'Bar - Marcus and Sophia' },
        { 'start': '2020-11-03 09:00:00', 'duration': '04:00:00', 'note': 'Entrance - Marcus and Sophia' },
        { 'start': '2020-11-03 09:00:00', 'duration': '04:00:00', 'note': 'Restaurant - Henri and Lewis' },
        { 'start': '2020-11-03 09:00:00', 'duration': '04:00:00', 'note': 'Front stage security - Levi and Eve' },
        { 'start': '2020-11-04 09:00:00', 'duration': '04:00:00', 'note': 'Bar - Henri and Lewis' },
        { 'start': '2020-11-04 09:00:00', 'duration': '04:00:00', 'note': 'Entrance - Marcus and Sophia' },
        { 'start': '2020-11-04 09:00:00', 'duration': '04:00:00', 'note': 'Restaurant - Martin and Anna' },
        { 'start': '2020-11-04 09:00:00', 'duration': '04:00:00', 'note': 'Front stage security - Levi and Eve' },
        { 'start': '2020-11-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
        { 'start': '2020-11-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
        { 'start': '2020-11-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
        { 'start': '2020-11-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
        { 'start': '2020-11-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
    ]

    return (
        <View style={styles.container}>
            <WeeklyCalendar
                style={styles.calendar}

                events={events}

                themeColor={'#F05A89'}

                startWeekday={1}

                durationContainer={{
                    color: 'orange'
                }}

                durationDot={'orange'}
                eventNote={{
                    color: 'orange'
                }}

                titleStyle={{
                    color: '#17191F',
                    textTransform: 'uppercase',
                }}

                dayLabelStyle={{
                    color: '#17191F'
                }}

                noteLabelStyle={{
                    color: 'green'
                }}

            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //backgroundColor: '#17191F',
        //backgroundColor: '#2E223A',
        alignItems: 'center',
    },

    calendar:{
        marginTop: 20,
        //backgroundColor: '#17191F',
        //backgroundColor: '#2E223A',
        backgroundColor: 'white',
        flex: 1,
        height: 900,
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
