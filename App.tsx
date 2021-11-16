import React, { useState } from 'react'
import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'



export default function App() {
  const [text, setText] = useState('')

  function buttonPressed(text: any) {
    return text
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <TextInput
        style={styles.txtname}
        placeholder="Insert your name here"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TouchableOpacity style={styles.btn} onPress={buttonPressed}>
        <View>
          <Text>Start</Text>
        </View>
      </TouchableOpacity>

      <View>
      <Text>Hello World, this is a Test.
        Probably it will be an interactive story, but i'm not sure yet. Testing functionalities: Icon, Button, Scroll and Input text</Text>
      </View>
    </SafeAreaView>
  )
}
