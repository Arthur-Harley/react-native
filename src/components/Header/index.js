import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import styles from './style';

export default function Header(){
  return(
      <LinearGradient colors={['#FF4500','#FFA500']} style={styles.LinearGradient}
        start={{x:0.0, y:0.0}}
        end={{x:1.0, y:0.0}}
      >
        
        <View style={styles.header}>

          <SafeAreaView>
            <Text style={styles.text}>Lorem Ipsum</Text>
          </SafeAreaView>

        </View>
        </LinearGradient>
  )
}