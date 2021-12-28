import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View ,Modal} from "react-native"
import { IData } from "..";
import { Detalhes } from "../Detalhes";


interface IFilmes{
  data: IData;
}

export function Filmes({data}: IFilmes){
  const [visibleModal, setvisibleModal] = useState(false);
    return(
      <View >
        <View style={styles.card}> 
          <Text style={styles.titulo}>{data.nome}</Text>
          <Image source={{uri: data.foto}} style={styles.capa} />
          <View style={styles.areaBtn}>
            <TouchableOpacity style={styles.botao} onPress={() => setvisibleModal(true)}>
              <Text style={styles.textoMais}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal animationType="slide" transparent={true} visible={visibleModal}>
          <Detalhes data={data} onPress={() => setvisibleModal(false)}/>
        </Modal>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    card: {
      margin: 10,
      elevation: 3,
      backgroundColor: '#fff'
    },
    capa: {
      height: 250,
      zIndex: 2,
      resizeMode: 'cover',
    },
    titulo: {
      padding: 15,
      fontSize: 18,
    },
    areaBtn:{
      alignItems: 'flex-end',
      marginTop: -45,
      zIndex:9,
    },
    botao: {
      width: 100,
      backgroundColor: '#83A603',
      opacity: 1,
      padding: 8,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    textoMais: {
      color: '#fff',
      textAlign: 'center'
    }
  })