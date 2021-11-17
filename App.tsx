import React, { useState } from 'react'
import {
  ScrollView,
  TextInput,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image
} from 'react-native'
import Svg from 'react-native-svg'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'

export default function App() {
  const [text, setText] = useState('')

  function buttonPressed() {
    return
    //return console.log(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.intro}>
        {`Hello, this is an educational test. In my first work, based on an Android application, I made an short intro about my goals as a dev padawan, now I thought about an interactive like experience, and for this purpose I choose two paragraphs of a D&D role playing`}{' '}
        <Text
          style={{ color: `black`, fontWeight: 'bold' }}
          onPress={() =>
            Linking.openURL(
              'https://wotbs-4e.obsidianportal.com/wikis/vignette-one'
            )
          }
        >
          fan fiction
        </Text>
      </Text>

      <TextInput
        style={styles.txtsub}
        placeholder="Name your hero!"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TouchableOpacity style={styles.btn} onPress={buttonPressed}>
        <View>
          <Text style={{ color: `white`, fontWeight: 'bold' }}>Start</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.fic}>
        <Image style={styles.pic} source={require('./assets/rpgmage.png')} />
        <Text style={styles.title}> War of The Burning Sky </Text>
      </View>

      <ScrollView style={styles.fic}>
        
        <Text style={styles.rpg}>
          {`"As ${text} go about his day, the city seems on edge, as if the citizens have taken a deep breath and are waiting to exhale. Most folk walk around with their heads down, murmuring to themselves. Even the jovial public houses have turned dour and depressing. In one of the lower-class neighborhoods near the West Gate, Viv Finner and her husband Trehan, proprietors of the Poison Apple Pub, are frightened.\nEveryone knew Trehan was a magus. They knew it as much from the twinkle in his eye and his perpetual smirk as they did from the fact that he could put a rowdy customer to sleep with a handful of dust. But no one seemed to mind. Most Gate Passers didn’t trust magi as a group, but just about everybody who knew Trehan Finner liked him.\n\nWith ${text}'s hands cupping a warm mug of cider, he look up at Trehan and smile. He returns the smile and winks, carefully wiping down the bar with a stained rag. He leans in and mumbles something to ${text} and his heart sinks."`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
