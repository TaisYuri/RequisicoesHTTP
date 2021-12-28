import React from "react";
import RNPickerSelect from 'react-native-picker-select';

interface IPicker{
    moedas: any;
    onChange: ((item: string) => void);
}

export function Picker({moedas, onChange}:IPicker) {
    const placeholder = {
        label: 'Selecione uma moeda',
        value: null,
        color: '#000'
    }
    return(
        <RNPickerSelect
        placeholder={placeholder}
            items={moedas}
            onValueChange={(item) => onChange(item)}
            style={{
                //padronizar em estilos diferentes 
                inputIOS: {
                    fontSize: 20,
                    color: '#000'
                },
                inputAndroid: {
                    fontSize: 20,
                    color: '#000'
                }
            }}
        />
    )
}