import React from 'react';
import { StyleSheet, View, Text, Image}  from 'react-native'
import colors from '../styles/colors';

import userImg from '../../assets/douglas.png'


import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../styles/fonts';

export function Header() {
    return (
        <View style={style.container}>
            <View>
                <Text style={style.greeting}>Olá,</Text>
                <Text style={style.userName}>Douglas</Text>
            </View>
            <Image source={userImg} style={style.image} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    greeting: {
        fontSize: 28,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 26,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
    
})
