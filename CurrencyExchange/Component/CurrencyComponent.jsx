import React from "react";
import { TextInput } from "react-native";



const Input = () => {

    return (

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
    );
}

export default Input;