import React from 'react';
import {StyleSheet, View} from 'react-native';
import WeeklyCalendar from "react-native-weekly-calendar";

export default function CalendarView() {

    const events = [
        { 'start': '2021-01-18 09:00:00', 'duration': '04:00:00', 'note': 'Bar - Marcus and Sophia' },
        { 'start': '2021-01-18 09:00:00', 'duration': '04:00:00', 'note': 'Entrance - Henri and Lewis' },
        { 'start': '2021-01-18 09:00:00', 'duration': '04:00:00', 'note': 'Restaurant - Martin and Anna' },
        { 'start': '2021-01-18 09:00:00', 'duration': '04:00:00', 'note': 'Front stage security - Levi and Eve' },
        { 'start': '2021-01-19 09:00:00', 'duration': '04:00:00', 'note': 'Bar - Marcus and Sophia' },
        { 'start': '2021-01-19 09:00:00', 'duration': '04:00:00', 'note': 'Entrance - Marcus and Sophia' },
        { 'start': '2021-01-19 09:00:00', 'duration': '04:00:00', 'note': 'Restaurant - Henri and Lewis' },
        { 'start': '2021-01-19 09:00:00', 'duration': '04:00:00', 'note': 'Front stage security - Levi and Eve' },
        { 'start': '2021-01-20 09:00:00', 'duration': '04:00:00', 'note': 'Bar - Henri and Lewis' },
        { 'start': '2021-01-20 09:00:00', 'duration': '04:00:00', 'note': 'Entrance - Marcus and Sophia' },
        { 'start': '2021-01-20 09:00:00', 'duration': '04:00:00', 'note': 'Restaurant - Martin and Anna' },
        { 'start': '2021-01-20 09:00:00', 'duration': '04:00:00', 'note': 'Front stage security - Levi and Eve' },
        { 'start': '2021-01-21 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
        { 'start': '2021-01-21 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
        { 'start': '2021-01-21 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
        { 'start': '2021-01-21 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
        { 'start': '2021-01-21 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
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
        alignItems: 'center',
    },

    calendar:{
        marginTop: 20,
        backgroundColor: 'white',
        flex: 1,
        height: 900,
    },

});
