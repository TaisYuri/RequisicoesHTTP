import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IData } from "..";


interface IDetalhes{
  onPress?: () => void;
  data: IData;
}

export function Detalhes({ data, onPress}: IDetalhes){
 
    return(
      <View style={styles.container}>
        <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.btnVoltar} onPress={onPress}>
                <Text style={{color: '#fff', fontSize: 20}}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{data.nome}</Text>
            <Text style={styles.sinopse}>Sinopse: </Text>
            <Text style={styles.descricao}>{data.sinopse}</Text>
        </View>     
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      flex: 1,
      alignItems:'center',
      justifyContent: 'flex-end'
     
    },
    modalContainer: {
        width: '90%',
        height: '50%',
        backgroundColor:'#1C1B19',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    btnVoltar: {
        backgroundColor: '#83A603',
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 50,
    },
    titulo:{
        textAlign: 'center',
        color: '#FFF',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    sinopse:{
        color: '#fff',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10,
    },
    descricao:{
        marginHorizontal: 10,
        color: '#FFF'

    },

});