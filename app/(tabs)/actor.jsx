import { Text, Button, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supa'
import { SafeAreaView } from 'react-native-safe-area-context'

const actor = () => {

    const [actor, setActor] = useState([])

    const [nombreActor, setNombreActor] = useState('');
    const [apellidoActor, setApellidoActor] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');

    const agregarActor = () => {
        if (nombreActor && apellidoActor && fechaNacimiento && nacionalidad) {
            supabase.from('actor').insert({
                nombreactor: nombreActor,
                apellidoactor: apellidoActor,
                fechanacimiento: fechaNacimiento,
                nacionalidad: nacionalidad
            }).then(() => {
                setNombreActor('');
                setApellidoActor('');
                setFechaNacimiento('');
                setNacionalidad('');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        const fetchActor = async () => {
            const { data, error } = await supabase.from('actor').select('*')
            if (error) {
                console.log(error)
                return;
            }
            setActor(data)
        };
        fetchActor();
    }, [])

    return (
        <SafeAreaView>

            <Text>
                Agregar Actor
            </Text>

            <TextInput
                placeholder='NombreActor'
                value={nombreActor}
                onChangeText={text => setNombreActor(text)}
            />
            <TextInput
                placeholder='ApellidoActor'
                value={apellidoActor}
                onChangeText={text => setApellidoActor(text)}
            />
            <TextInput
                placeholder='FechaNacimiento'
                value={fechaNacimiento}
                onChangeText={text => setFechaNacimiento(text)}
            />
            <TextInput
                placeholder='Nacionalidad'
                value={nacionalidad}
                onChangeText={text => setNacionalidad(text)}
            />

            <Button title="Agregar actor" onPress={agregarActor} />

            <FlatList
                data={actor}
                keyExtractor={item => item.actorid}
                renderItem={({ item }) => (
                    <ScrollView>
                        <Text>{item.nombreactor}</Text>
                        <Text>{item.apellidoactor}</Text>
                        <Text>{item.fechanacimiento}</Text>
                        <Text>{item.nacionalidad}</Text>
                    </ScrollView>
                )}
            />
        </SafeAreaView>
    )

}

export default actor