import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function Home(props) {
  return (
    <ScrollView>
        <View>
            <Text >{props.title}</Text>
        </View>
    </ScrollView>
  )
}
