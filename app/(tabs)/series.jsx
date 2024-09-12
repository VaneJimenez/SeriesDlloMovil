import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const series = () => {
  const [tituloSerie, setTituloSerie] = useState('');
  const [anho, setAnho] = useState('');
  const [idDirector, setIdDirector] = useState('');
  const [idPlataforma, setIdPlataforma] = useState('');


  const agregarSerie = () => {
    if (tituloSerie && anho && idDirector && idPlataforma) {
      setTituloSerie('')
      setAnho('')
      setIdDirector('')
      setIdPlataforma('')
    }
  }

  return (
    <View>

      <Text>
        Agregar Serie
      </Text>
      <TextInput
        placeholder='Título'
        value={tituloSerie}
        onChangeText={text => setTituloSerie(text)}
      />
      <TextInput
        placeholder='Año'
        value={anho}
        onChangeText={text => setAnho(text)}
      />
      <TextInput
        placeholder='id del Director'
        value={idDirector}
        onChangeText={text => setIdDirector(text)}
      />
      <TextInput
        placeholder='id del Plataforma'
        value={idPlataforma}
        onChangeText={text => setIdPlataforma(text)}
      />

      <Button title="Agregar serie" onPress={agregarSerie} />

    </View>
  )
}

export default series