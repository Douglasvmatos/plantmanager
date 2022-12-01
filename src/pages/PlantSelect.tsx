import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import colors from '../styles/colors';

import { Header } from '../components/Header';
import fonts from '../styles/fonts';

import { EnviromentButton } from '../components/EnviromentButton';

export function PlantSelect() {


    return (            
            <View style={styles.container}>
                <View style={styles.Header}>
                <Header />
                <Text style={styles.title}> Em qual ambiente</Text>
                <Text style={styles.subtitle}> voce quer colocar sua planta?</Text>
                </View>

                <EnviromentButton title='Testando'/>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.background,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
    },
    Header: {
        paddingHorizontal: 30
    }
})