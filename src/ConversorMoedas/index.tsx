import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity , Keyboard, ActivityIndicator } from 'react-native';
import { Picker } from './Picker';
import { api } from './Services/api';


export function ConversorMoedas(){    
    const [loading, setLoading] =useState(true)
    
    const [moedas, setMoedas] = useState([]);
    const [moedaSelecionada, setMoedaSelecionada] = useState('');
    const [moedaBValor, setMoedaBValor] = useState('');
    const [valorConvertido, setValorConvertido] =useState('0')
    const [precoAtual, setPrecoAtual] =useState(null)
    const [data, setData] =useState(null)

    useEffect(( )=> {
        async function loadMoedas() {
            const response = await api.get('all')
            
            
            let arrayMoedas:any = []
             //Object.keys(response.data)   //retorna todas as chaves do data
            Object.keys(response.data).map( (key) => {
                arrayMoedas.push({
                    key: key,
                    label: key, 
                    value: key,                  
                })
            })
            setMoedas(arrayMoedas)
            setLoading(false);
           
        }
        loadMoedas();
    }, [])

    async function converter(){
        if(moedaSelecionada === null || moedaBValor === '0'){ //verifica se a moeda foi selecionada e se o valor a ser convertido foi digitado
            alert('Selecione uma moeda')
            return;
        }
        const response = await api.get(`all/${moedaSelecionada}-BRL`) // pegando o complemento do link 'all/USD-BRL'
        setPrecoAtual(response.data[moedaSelecionada].ask) //acessa apenas a propriedade de valor ASK

        let resultado = (response.data[moedaSelecionada].ask * parseFloat(moedaBValor))
        setValorConvertido(`R$ ${resultado.toFixed(2)}`)

        setData(response.data[moedaSelecionada].create_date)
        
        Keyboard.dismiss();
    }


  if(loading){
      return(
          <ActivityIndicator color='#000' size={45} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
      )
  }else{
    return (
        <View style={style.container}>
           <View style={style.areaMoeda}>
                <Text>Selecione sua moeda</Text>
                <Picker moedas={moedas} onChange={(moeda:string ) =>setMoedaSelecionada(moeda)}/>
            </View>
            <View style={style.areaValor}>
            <Text>Digite um valor para converter em (R$)</Text>
            <TextInput placeholder='Ex: 150' style={style.input} keyboardType='numeric' onChangeText={(item) =>setMoedaBValor(item) }/> 
            </View>
            <TouchableOpacity style={style.btnArea} onPress={converter}>
                <Text style={{color: '#FFF', fontSize: 17}}>Converter</Text>
            </TouchableOpacity>

            {valorConvertido !== '0' && (
                <View style={style.areaResultado}>
                    <Text style={style.valorConvertido}>{moedaBValor}{moedaSelecionada}</Text>
                    <Text style={[style.valorConvertido, {fontSize: 18, marginVertical: 10}]}>corresponde a</Text>
                    <Text style={style.valorConvertido}>{valorConvertido}</Text>
                    <Text style={style.percoatual}>preço atual: {precoAtual} -- atualizado em: {data}</Text>
                </View> 
            )}            
        </View>
     );
  }
    
  
  
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#101215',
        paddingTop: 40
    },
    areaMoeda: {
        width: '90%',
        backgroundColor: '#F9F9F9',
        padding: 9,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        marginBottom: 1
    },
    areaValor:{
        width: '90%',
        backgroundColor: '#F9F9F9',
        padding: 9,
    },
    input: {
        width: '100%',
        padding: 10,
        height: 45,
        fontSize: 20,
        marginTop: 8,
        color: '#000'
    },
    btnArea:{
        width: '90%',
        height: 45,
        backgroundColor: '#FB4b57',
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaResultado: {
        width: '90%',
        backgroundColor: '#fff',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },
    valorConvertido: {
        fontSize: 39,
        fontWeight: 'bold',
    },
    percoatual:{
        width: '100%', 
        fontSize: 10,
        marginTop: 5,
        paddingBottom: 10
    }
})


