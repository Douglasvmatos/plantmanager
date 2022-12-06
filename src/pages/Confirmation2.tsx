import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native'

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


import { useNavigation } from '@react-navigation/native'

export function Confirmation2() {

    const navigation = useNavigation()

    function handlerMoveOn() {
        navigation.navigate('MyPlants')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    🤗
                </Text>
                <Text style={styles.title}>
                    Tudo certo
                </Text>

                <Text style={styles.subtitle}>
                    Fique tranquilo que sempre vamos lembrar voce, de cuidar da sua plantinha com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button
                        title='Muito Obrigado'
                        onPress={handlerMoveOn}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading,
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10,
        width: '70%',
        color: colors.white,
        marginTop: 20

    }
})