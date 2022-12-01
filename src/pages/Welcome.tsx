import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import wateringImage from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button';

export default function Welcome() {
    const navigation = useNavigation()

    function openScreen() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={style.container}>
        
        <View style={style.wrapper}>
            <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            <Image source={wateringImage}
                style={style.image}
                resizeMode="contain" />

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <View style={style.button}>
                <Button
                title='>'
                onPress={openScreen}
                />
            </View>
         </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10,
        width: '70%',
        color: colors.white
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },

    buttonIcon: {
        color: colors.white,
        fontSize: 32,

    },
    
})