import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export const Actores = () => {


    const [idActor, setIdActor] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const agregarActor = () => {
        if (idActor && nombre && apellido && nacionalidad && fechaNacimiento) {
            setIdActor('')
            setNombre('')
            setApellido('')
            setNacionalidad('')
            setFechaNacimiento('')
        }
    }

    return (
        <View>

            <Text>
                Agregar Actor
            </Text>

            <TextInput
                placeholder='id'
                value={idActor}
                onChangeText={text => setIdActor(text)}
            />
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

            <Button title="Agregar actor" onPress={agregarActor} />


            

        </View>
    )
}