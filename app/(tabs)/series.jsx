import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const series = () => {
  const [idSerie, setIdSerie] = useState('');
  const [titulo, setTitulo] = useState('');
  const [anho, setAnho] = useState('');
  const [capitulos, setCapitulos] = useState('');
  const [idDirector, setIdDirector] = useState('');
  const [idPlataforma, setIdPlataforma] = useState('');


  const agregarSerie = () => {
    if (idSerie && titulo && anho && capitulos && idDirector && idPlataforma) {
      setIdSerie('')
      setTitulo('')
      setAnho('')
      setCapitulos('')
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
        placeholder='id'
        value={idSerie}
        onChangeText={text => setIdSerie(text)}
      />
      <TextInput
        placeholder='Título'
        value={titulo}
        onChangeText={text => setTitulo(text)}
      />
      <TextInput
        placeholder='Año'
        value={anho}
        onChangeText={text => setAnho(text)}
      />
      <TextInput
        placeholder='Capítulos'
        value={capitulos}
        onChangeText={text => setCapitulos(text)}
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