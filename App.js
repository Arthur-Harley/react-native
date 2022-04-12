import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import { Content } from './src/components/Content';


import React from 'react';
import { Bottom } from './src/components/bottom';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <Header/>
      <Content/>
      <Bottom/>
    </View>
  );
}