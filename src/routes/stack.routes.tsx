import React from 'react';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import {UserIdentification} from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { Confirmation2 } from '../pages/Confirmation2';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
    <Navigator>
        <Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Screen name="UserIdentification" component={UserIdentification} options={{title: 'Identificação'}}/>
        <Screen name="Confirmation" component={Confirmation} options={{title: ''}}/>
        <Screen name="Confirmation2" component={Confirmation2} options={{title: ''}}/>
        <Screen name="PlantSelect" component={PlantSelect} options={{title: ''}}/>
        <Screen name="PlantSave" component={PlantSave} />
        <Screen name="MyPlants" component={MyPlants}  options={{title: 'Minhas Plantas'}}/>
    </Navigator>
    )
}
