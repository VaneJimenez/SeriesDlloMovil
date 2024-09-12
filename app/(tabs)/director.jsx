import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const director = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const agregarDirector = () => {
    if (nombre && apellido && nacionalidad && fechaNacimiento) {
      setNombre('')
      setApellido('')
      setNacionalidad('')
      setFechaNacimiento('')
    }
  }
  return (
    <View>

      <Text>
        Agregar Director
      </Text>
      <TextInput
        placeholder='Nombre'
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        placeholder='Apellido'
        value={apellido}
        onChangeText={text => setApellido(text)}
      />
      <TextInput
        placeholder='Nacionalidad'
        value={nacionalidad}
        onChangeText={text => setNacionalidad(text)}
      />
      <TextInput
        placeholder='FechaNacimiento'
        value={fechaNacimiento}
        onChangeText={text => setFechaNacimiento(text)}
      />

      <Button title="Agregar director" onPress={agregarDirector} />
    </View>
  )
}

export default director