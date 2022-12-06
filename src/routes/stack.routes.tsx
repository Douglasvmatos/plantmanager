import React from 'react';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import {UserIdentification} from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { Confirmation2 } from '../pages/Confirmation2';
import { PlantSave } from '../pages/PlantSave';
import AuthRoutes from './tab.routs';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
    <Navigator>
        <Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Screen name="UserIdentification" component={UserIdentification} options={{title: ''}}/>
        <Screen name="Confirmation" component={Confirmation} options={{title: ''}}/>
        <Screen name="Confirmation2" component={Confirmation2} options={{title: ''}}/>
        <Screen name="PlantSelect" component={AuthRoutes} options={{title: ''}}/>
        <Screen name="PlantSave" component={PlantSave} options={{title: ''}}/>
        <Screen name="MyPlants" component={AuthRoutes}  options={{title: ' Plantas'}}/>
    </Navigator>
    )
}
