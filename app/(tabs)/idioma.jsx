import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const idioma = () => {
  const [nombre, setNombre] = useState('');
  const [isoCode, setIsoCode] = useState('');


  const agregarIdioma = () => {
    if (nombre && isoCode) {
      setNombre('')
      setIsoCode('')
    }
  }

  return (
    <View>

      <Text>
        Agregar Idioma
      </Text>
      <TextInput
        placeholder='Nombre'
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        placeholder='IsoCode'
        value={isoCode}
        onChangeText={text => setIsoCode(text)}
      />

      <Button title="Agregar" onPress={agregarIdioma} />

    </View>
  )
}

export default idioma