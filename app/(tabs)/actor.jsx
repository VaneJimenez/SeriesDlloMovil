import { Text, Button, InputForm, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supa'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputForm from '../../components/InputForm'

const actor = () => {

    const [actor, setActor] = useState([])

    const [nombreActor, setNombreActor] = useState('');
    const [apellidoActor, setApellidoActor] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');

    const agregarActor = async () => {
        if (nombreActor && apellidoActor && fechaNacimiento && nacionalidad) {
            const { error } = await supabase.from('actor').insert({
                nombreactor: nombreActor,
                apellidoactor: apellidoActor,
                fechanacimiento: fechaNacimiento,
                nacionalidad: nacionalidad,
            });
            if (error) {
                console.log(error);
                return;
            }
            setNombreActor('');
            setApellidoActor('');
            setFechaNacimiento('');
            setNacionalidad('');
            fetchActor();
        }
    };

    useEffect(() => {
        const fetchActor = async () => {
            const { data, error } = await supabase.from('actor').select()
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

            <InputForm
                placeholder='NombreActor'
                value={nombreActor}
                onChangeText={text => setNombreActor(text)}
            />
            <InputForm
                placeholder='ApellidoActor'
                value={apellidoActor}
                onChangeText={text => setApellidoActor(text)}
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