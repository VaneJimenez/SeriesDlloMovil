import { Text, Button, InputForm, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supa'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputForm from '../../components/InputForm'

const director = () => {

  const [director, setDirector] = useState([])

  const [nombreDirector, setNombreDirector] = useState('');
  const [apellidoDirector, setApellidoDirector] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');

  const agregarDirector = () => {
    if (nombreDirector && apellidoDirector && fechaNacimiento && nacionalidad) {
      supabase.from('director').insert({
        nombredirector: nombreDirector,
        apellidodirector: apellidoDirector,
        fechanacimiento: fechaNacimiento,
        nacionalidad: nacionalidad
      }).then(() => {
        setNombreDirector('');
        setApellidoDirector('');
        setFechaNacimiento('');
        setNacionalidad('');
        fetchDirector();
      }).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    const fetchDirector = async () => {
      const { data, error } = await supabase.from('director').select('*')
      if (error) {
        console.log(error)
        return;
      }
      setDirector(data)
    };
    fetchDirector();
  }, [])

  return (
    <SafeAreaView>

      <Text>
        Agregar Director
      </Text>
      <InputForm
        placeholder='NombreDirector'
        value={nombreDirector}
        onChangeText={text => setNombreDirector(text)}
      />
      <InputForm
        placeholder='ApellidoDirector'
        value={apellidoDirector}
        onChangeText={text => setApellidoDirector(text)}
      />
      <InputForm
        placeholder='FechaNacimiento'
        value={fechaNacimiento}
        onChangeText={text => setFechaNacimiento(text)}
      />
      <InputForm
        placeholder='Nacionalidad'
        value={nacionalidad}
        onChangeText={text => setNacionalidad(text)}
      />

      <Button title="Agregar director" onPress={agregarDirector} />

      <FlatList
        data={director}
        keyExtractor={item => item.directorid}
        renderItem={({ item }) => (
          <ScrollView>
            <Text>{item.nombredirector}</Text>
            <Text>{item.apellidodirector}</Text>
            <Text>{item.fechanacimiento}</Text>
            <Text>{item.nacionalidad}</Text>
          </ScrollView>
        )}
      />

    </SafeAreaView>
  )
}

export default director