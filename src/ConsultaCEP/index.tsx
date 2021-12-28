import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View , Keyboard} from "react-native";
import {api} from './Services/'

interface Item{
    cep: string;
    address: string;
    district: string;
    city: string;
}//<ConsultaCep>({} as ConsultaCep

export function ConsultaCEP(){

    const [cepDigitado, setCepDigitado] = useState('');
    const[cepUser, setcepUser] = useState<Item>()
    
    const[erro, setErro] = useState(null)
   
    async function consultar(){
        if(cepDigitado === ''){
            alert('Digite um CEP valido');
            return;
        }
        
        await api.get(`${cepDigitado}`)
        .then(function(response){
            setcepUser(response.data)
            Keyboard.dismiss();
        })
                
        .catch(function(error){
            setErro(error)              
        })     
              
           
    }

    function limpar(){
        setCepDigitado('')
        setErro(null)
        setcepUser(undefined)
     
    }


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Digite o CEP a consultar</Text>
            <TextInput style={styles.input} placeholder="Ex: 03562050" keyboardType="numeric" value={cepDigitado} onChangeText={(item:any) => setCepDigitado(item)}/>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={consultar} style={[styles.btn, {backgroundColor: '#4E6BBF'}]}>
                    <Text style={styles.textoBtn}>Consultar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{backgroundColor: '#FB4b57'}]} onPress={limpar} >
                    <Text style={styles.textoBtn}>Limpar</Text>
                </TouchableOpacity>
            </View>
          
            
            {cepUser  
                ?
                    (<View style={styles.containerResultado}>
                        <Text style={styles.resultado}>Resultado da busca: </Text>
                        <Text style={styles.dados}>CEP: { cepUser.cep}</Text>
                        <Text style={styles.dados}>Endereço: {cepUser.address}</Text>
                        <Text style={styles.dados}>Bairro: {cepUser.district}</Text>
                        <Text style={styles.dados}>Cidade: {cepUser.city}</Text>
                    </View>)
                :erro !== null  &&
                    ( <View style={styles.containerResultado}>
                        <Text style={styles.resultado}>CEP INVALIDO</Text>
                    </View>)
            }            

            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
       
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 5,
        height: 45,
        margin: 10,
        padding: 10
    },
    containerBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    btn:{
        borderRadius: 6,
        borderWidth: 1,
        padding: 10,     
    },
    textoBtn:{
        color: '#fff'
    },
    containerResultado:{
        margin: 10,
        backgroundColor:'#001A24',
        paddingBottom: 10
        
    },
    resultado:{
        fontSize: 19,
        fontWeight: 'bold',
        color: '#D95323',
        padding: 10,
    },
    dados:{
        color: '#fff',
        paddingLeft: 10,
        paddingBottom: 4

    },
});