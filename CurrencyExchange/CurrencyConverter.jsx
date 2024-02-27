import React, { useState } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';

const CurrencyConverter = () => {
    const [usd, setUsd] = useState(``);
    const [rwf, setRwf] = useState(``);

    
    const exchangeUSD = 1300;
    const convert = () => {
        const floatUsd = parseFloat(usd)
        if(!isNaN(floatUsd)) {
        const exchangeRWF = floatUsd * exchangeUSD;
        setRwf(exchangeRWF.toFixed(2));
    }
}

    return (
        <View style={{ display: 'flex', paddingHorizontal: 30, paddingVertical: 40 }}>
            <Text style={{ display: 'flex', paddingVertical: 60, fontSize: 30, fontWeight: 'bold', color: '#1F4E10' }}>
                Currency Converter
            </Text>

            <TextInput
                onChangeText={(text) => setUsd(text)}
                style={{
                    width: 350,
                    height: 40,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 5,
                    paddingLeft: 10,
                    color: '#1F4E10',
                }}
                keyboardType="numeric"
                label={'Currency'}
                value={usd}
            />

            <TouchableOpacity onPress={convert} style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1F4E10', width: 80, height: 40, marginTop: 20, borderRadius: 10,paddingHorizontal:6 }}>
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', }}>Convert</Text>
            </TouchableOpacity>
            {/* <Button title='Convert' /> */}

            <Text style={{marginTop: 10,color: '#1F4E10', fontSize: 20,fontWeight:'bold'}}>RWF: {rwf}</Text>
        </View>
    );
};

export default CurrencyConverter;
