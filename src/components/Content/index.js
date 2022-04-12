import React, { useState } from "react";
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from "react-native-web";

export function Content(){
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [media, setMedia] = useState(0);

    const x = parseFloat(media);
    const por  = x / 3;

    function resultMedia(){
        setMedia(Number(n1) + Number(n2) + Number(n3));
        keyboard.dismiss();
    }
    return(
        <View>
            <Text>A média é</Text>

            <TextInput

            maxLength={4}
            keyboardType='decimal-pad'
            placeholder="Primeira nota"
            value={n1}
            onChangeText={(int) => setN1(int)}
            />

            <TextInput

            maxLength={4}
            keyboardType='decimal-pad'
            placeholder="Segunda nota"
            value={n2}
            onChangeText={(int) => setN2(int)}
            />

            <TextInput

            maxLength={4}
            keyboardType='decimal-pad'
            placeholder="Terceira nota"
            value={n3}
            onChangeText={(int) => setN3(int)}
            />

            <TouchableOpacity
            
            activeOpacity={0.7}
            onPress={resultMedia}
            >
            
            <Text>Calcular Média</Text>
            </TouchableOpacity>
            
            <View>
                <Text>Total: {media.toFixed(1)}</Text>
                <Text>Média: {por.toFixed(1)}</Text>
            </View>

            {por < 5 ? (
                <Text>Reprovado</Text>
            ) : por >= 5 && por < 7 ? (
                <Text>Recuperação</Text>
            ) : por > 7 && por <= 10 ? (
                <Text>Aprovado</Text>
            ) : (
                <Text>Não foi possível calcular</Text>
            )}

        </View>  
    )
}