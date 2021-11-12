import React, {useState} from 'react';
import {Text,SafeAreaView, View, TextInput, TouchableOpacity  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {styles} from './styles'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style= 'dark' />
      <Text>Insert your name</Text>
    </SafeAreaView>
  );
}


