import React from 'react'
import { Text, View } from 'react-native'

export default function Card(props) {
  return (
    <View>
        <Text style={{color:'white',backgroundColor:'black'}}>{props.number}</Text>
    </View>
    
  )
}

