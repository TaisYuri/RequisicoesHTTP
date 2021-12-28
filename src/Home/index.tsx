import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


export function Home(){
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return(
        <View style={style.Container}>
            <Text style={style.titulo}>REQUISIÇÕES HTTP</Text>
            <View style={style.image}>
                <Image source={require('../../assets/http.png')} />
                <Image source={require('../../assets/flight.png')} />
            </View>
            <View style={style.areaBtn}>
                <TouchableOpacity style={style.btn} onPress={ () => navigation.navigate('CartazFilmes')}>
               
                    <Text style={style.btnTexto}>Filmes em Cartaz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('ConsultaCep')}>
                    <Text style={style.btnTexto}>Consulta CEP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('ConversorMoedas')}>
                    <Text style={style.btnTexto}>Conversor Moeda</Text>
                </TouchableOpacity>                
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Container:{
        flex: 1,  
        backgroundColor: '#2E3E9D' ,
        justifyContent: 'center'
 
    },
    titulo:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 20 
    },
    image:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },
    areaBtn:{
        marginHorizontal: 20
    },
    btn:{       

        padding: 10,
        borderWidth: 0.7,
        borderColor: '#fff',
        elevation: 1,
        marginVertical: 7,
        borderRadius: 9,      
    },
    btnTexto:{
        fontSize: 15,
        color: '#fff',
        textAlign: 'center'
    },
})