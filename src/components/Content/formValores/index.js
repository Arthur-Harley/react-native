import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'
import styles from './style';

export default function FormValores () {

  const [Valor1, setValor1] = useState('');
  const [Valor2, setValor2] = useState('');
  const [Valor3, setValor3] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x ;

  function gerarResultado() {
      setTotal(Number(Valor1) + Number(Valor2) + Number(Valor3));
      Keyboard.dismiss();
  }
    return (
        <View style={styles.boxView}>

            <TextInput style={styles.textInput}

            keyboardType='numeric'
            placeholder='Primeiro valor'
            value={Valor1}
            onChangeText={(int) => setValor1(int)}
            />
                
            <TextInput style={styles.textInput}
                
            keyboardType='numeric'
            placeholder='Segundo valor'
            value={Valor2}
            onChangeText={(int) => setValor2(int)}
            />

            <TextInput style={styles.textInput}

            keyboardType='numeric'
            placeholder='Terceiro valor'
            value={Valor3}
            onChangeText={(int) => setValor3(int)}
            />

           <TouchableOpacity style={styles.btnCalc}
            
            activeOpacity={0.10}
            onPress={gerarResultado}
            >
            
            <Text>Calcular Valores</Text>
            </TouchableOpacity>

            <br/>
            <br/>

            <View>
		        <Text style={styles.statusMedia}>Soma dos Valores = {total.toFixed(1)}</Text>
		    </View>

			{por < 10 && por > 0 && (
				<Text style={styles.statusMedia}>Intervalo de  0 a 10</Text>
			)}

			{por >= 11 && por < 20 && (
				<Text style={styles.statusMedia}>Intervalo de 11 a 20</Text>
			)}

			{por >= 21 &&  (
				<Text style={styles.statusMedia}>Intervalo de 21 +</Text>
			)}

        </View>

    );
  }