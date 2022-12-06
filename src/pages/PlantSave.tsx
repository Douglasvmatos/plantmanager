import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    View,
    ScrollView,
    Platform,
    TouchableOpacity,
    Image 
} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { SvgFromUri } from 'react-native-svg';

import { useRoute } from '@react-navigation/native'

import waterdrop from '../../assets/waterDrop.png'
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { format, isBefore } from 'date-fns';
import { PlantProps, savePlant } from '../libs/storage';

import { useNavigation } from '@react-navigation/native';

interface Params {
    plant: PlantProps
}

export function PlantSave() {

    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios' )
    const route = useRoute()
    const { plant } = route.params as Params 

    const navigation = useNavigation();

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if(Platform.OS == 'android') {
            setShowDatePicker(oldState => !oldState)
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date())
            return Alert.alert('Escolha uma hora no futuro!!')
        }

        if(dateTime)
            setSelectedDateTime(dateTime)
    }

    function handleOpenDateTimePickerForAndroid(){
        setShowDatePicker(oldState => !oldState)
    }
    

     async function handleSave() {
       
        try {
            await savePlant({
               ...plant,
               dateTimeNotification: selectedDateTime,
            })

        }catch{
            Alert.alert('Não foi possível salvar 😢')
        }
    }

    function moveOn() {
        navigation.navigate('Confirmation2')
    }

    return (
        <View style={style.container}>
        <View style={style.plantInfo}>
            <SvgFromUri 
                uri={plant.photo}
                height={150}
                width={150}
            />
            <Text style={style.plantName}>{plant.name}</Text>
            <Text style={style.plantAbout}>{plant.about}</Text>
        </View>
        <View style={style.controller}>
            <View style={style.tipContainer}>
                <Image 
                    source={waterdrop}
                    style={style.tipImage}
                />
                <Text style={style.tipText}>
                    {plant.water_tips}
                </Text>
            </View>
            <Text style={style.alertLabel}>
                Escolha o melhor horário para ser lembrado:
            </Text>
            {showDatePicker && (
                <DateTimePicker 
                    value={selectedDateTime}
                    mode="time"
                    display="spinner"
                />
            )}

            {
                Platform.OS === "android" && (
                    <TouchableOpacity
                    style={style.dataTimePickerButton}
                    onPress={handleOpenDateTimePickerForAndroid}
                    >
                    

                    <Text style={style.dateTimePickerText}>
                        {`Mudar horário${format(selectedDateTime, 'HH:mm')}`}
                    </Text>
                    </TouchableOpacity>
                )
            }


            <Button
                title="Cadastrar Planta"
                onPress={moveOn}
            />
        </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15

    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20,
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    tipImage: {
        height: 56,
        width: 56,
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    },
    dataTimePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    }
})