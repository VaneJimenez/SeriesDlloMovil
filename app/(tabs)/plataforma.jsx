import { Text, Button, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supa'
import { SafeAreaView } from 'react-native-safe-area-context'

const plataforma = () => {

    const [plataforma, setPlataforma] = useState([])

    const [nombrePlataforma, setNombrePlataforma] = useState('');

    const agregarPlataforma = () => {
        if (nombrePlataforma) {
            supabase.from('plataforma').insert({
                nombreplataforma: nombrePlataforma
            }).then(() => {
                setNombrePlataforma('');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        const fetchPlataforma = async () => {
            const { data, error } = await supabase.from('plataforma').select('*')
            if (error) {
                console.log(error)
                return;
            }
            setPlataforma(data)
        };
        fetchPlataforma();
    }, [])

    return (
        <SafeAreaView>

            <Text>
                Agregar Plataforma
            </Text>

            <TextInput
                placeholder='Plataforma'
                value={nombrePlataforma}
                onChangeText={text => setNombrePlataforma(text)}
            />

            <Button title="Agregar" onPress={agregarPlataforma} />

            <FlatList
                data={plataforma}
                keyExtractor={item => item.plataformaid}
                renderItem={({ item }) => (
                    <ScrollView>
                        <Text>{item.nombreplataforma}</Text>
                    </ScrollView>
                )}
            />

        </SafeAreaView>
    )
}

export default plataforma