import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function SignUpView ({navigation}) {

        return (
            <View style={styles.container}>

                <Image style={styles.image} source={require('../assets/alert1.png')}></Image>

            </View>
        );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17191F',
        alignItems: 'center',
    },


    image:{
        marginTop: 200,
        width: 350,
        height: 175,
        justifyContent: 'center'
    },

});
