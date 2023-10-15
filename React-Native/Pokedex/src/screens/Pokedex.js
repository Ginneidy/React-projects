import React, {useEffect} from 'react'
import {getPokemonsApi} from '../api/Pokemon'
import { View, Text } from 'react-native'

export default function Pokedex() {
  useEffect(() => {
    console.log("")
  }) 

  const loadPokemons = async () => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <View>
        <Text>Pokedex</Text>
    </View>
  )
}
