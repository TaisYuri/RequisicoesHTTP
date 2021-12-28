import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CartazFilmes } from '../CartazFilmes';
import { ConsultaCEP } from '../ConsultaCEP';
import { ConversorMoedas } from '../ConversorMoedas';
import { Home } from '../Home';

export function Routes(){
    const Stack = createNativeStackNavigator();
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='CartazFilmes' component={CartazFilmes}/>
                <Stack.Screen name='ConsultaCep' component={ConsultaCEP}/>
                <Stack.Screen name='ConversorMoedas' component={ConversorMoedas}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}