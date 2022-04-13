import React, { useState } from "react";
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from "react-native-web";
import styles from "./style";

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
        <View style={styles.boxView}>

            <br/>
            <br/>

            <TextInput style ={styles.textInput}

            maxLength={4}
            keyboardType='decimal-pad'
            placeholder="Primeira nota"
            value={n1}
            onChangeText={(int) => setN1(int)}
            />

            <TextInput style ={styles.textInput}

            maxLength={4}
            keyboardType='decimal-pad'
            placeholder="Segunda nota"
            value={n2}
            onChangeText={(int) => setN2(int)}
            />

            <TextInput style ={styles.textInput}

            maxLength={4}
            keyboardType='decimal-pad'
            placeholder="Terceira nota"
            value={n3}
            onChangeText={(int) => setN3(int)}
            />

            <TouchableOpacity style={styles.btnCalc}
            
            activeOpacity={0.7}
            onPress={resultMedia}
            >

            <Text>Calcular Média</Text>
            </TouchableOpacity>

            <br/>
            <br/>
            
            <View>
                <Text style={styles.statusMedia}>Total: {media.toFixed(1)}</Text>
                <Text style={styles.statusMedia}>Média: {por.toFixed(1)}</Text>
            </View>

            {por < 5 && por >= 0 && (
				<Text style={styles.statusMedia}>Reprovado</Text>
			)}

			{por >= 5 && por < 7 && (
				<Text style={styles.statusMedia}>Recuperação</Text>
			)}

            {por >= 7 && por <= 10 && (
				<Text style={styles.statusMedia}>Aprovado</Text>
			)}

			{por > 10 &&  (
				<Text style={styles.statusMedia}>Média máxima: 10</Text>
			)}
                <br/>
                <br/>
        </View>  
    )
}