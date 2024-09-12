import { Text, Button, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supa'
import { SafeAreaView } from 'react-native-safe-area-context'

const idioma = () => {
  const [idioma, setIdioma] = useState([])

  const [nombreIdioma, setNombreIdioma] = useState('');
  const [isoCode, setIsoCode] = useState('');


  const agregarIdioma = () => {
    if (nombreIdioma && isoCode) {
      supabase.from('idioma').insert({
        nombreidioma: nombreIdioma,
        isocode: isoCode
      }).then(() => {
        setNombreIdioma('');
        setIsoCode('');
      }).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    const fetchIdioma = async () => {
      const { data, error } = await supabase.from('idioma').select('*')
      if (error) {
        console.log(error)
        return;
      }
      setIdioma(data)
    };
    fetchIdioma();
  }, [])

  return (
    <SafeAreaView>

      <Text>
        Agregar Idioma
      </Text>
      <TextInput
        placeholder='Nombre idioma'
        value={nombreIdioma}
        onChangeText={text => setNombreIdioma(text)}
      />
      <TextInput
        placeholder='IsoCode'
        value={isoCode}
        onChangeText={text => setIsoCode(text)}
      />

      <Button title="Agregar" onPress={agregarIdioma} />

      <FlatList
        data={idioma}
        keyExtractor={item => item.idiomaid}
        renderItem={({ item }) => (
          <ScrollView>
            <Text>Idioma: {item.nombreidioma}</Text>
            <Text>ISO code: {item.isocode}</Text>
          </ScrollView>
        )}
      />

    </SafeAreaView>
  )
}

export default idioma