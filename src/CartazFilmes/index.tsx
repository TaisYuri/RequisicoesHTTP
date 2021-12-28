import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator  } from 'react-native';

import { Filmes } from './Fimes';
import {Api} from './Services';

export interface IData{
  card: string;
  nome: string;
  foto: string;
  sinopse: string;
  item: string;
  id: string
}

export function CartazFilmes(){    
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes(){
      const response = await Api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, [])

  if(loading){
      return(
        <View style={{justifyContent: 'center', alignItems:'center', flex:1 }}>
          <ActivityIndicator color='#83A603' size={45}/>
        </View>
      )
  }
  else{
    return (
        <View style={{ marginTop: 20 }}>
           <FlatList 
               showsVerticalScrollIndicator={false}
               data={filmes} 
               renderItem={ ({item}) => <Filmes data={item}  />} 
               keyExtractor={ (item:IData) => String(item.id)} />
        </View>
     );
  }
  
}



