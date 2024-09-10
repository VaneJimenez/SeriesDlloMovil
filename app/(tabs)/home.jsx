import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const home = () => {
  return (
    <View>
      <Text>
        SeriesDM_123.°
        create table actores (
          idActor bigint primary key,
          nombre varchar(20),
          apellido varchar(20),
          nacionalidad varchar(20),
          fechaNacimiento varchar(20)
        )
        Home
      </Text>
    </View>
  )
}

export default home