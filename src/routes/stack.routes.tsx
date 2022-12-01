import React from 'react';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
    <Navigator>
        <Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Screen name="UserIdentification" component={UserIdentification} options={{title: 'Identificação'}}/>
        <Screen name="Confirmation" component={Confirmation} />
        <Screen name="PlantSelect" component={PlantSelect} />
    </Navigator>
    )
}
