import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import { Content } from './src/components/Content/formMedia';
import FormValores from './src/components/Content/formValores';
import { Bottom } from './src/components/Bottom';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <Header/>

      <Content/>
      <FormValores/>
      <Bottom/>
    </View>
  );
}