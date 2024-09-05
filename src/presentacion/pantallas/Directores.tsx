import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export const Directores = () => {


    const [idDirector, setIdDirector] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const agregarDirector = () => {
        if (idDirector && nombre && apellido && nacionalidad && fechaNacimiento) {
            setIdDirector('')
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
                placeholder='id'
                value={idDirector}
                onChangeText={text => setIdDirector(text)}
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

            <Button title="Agregar director" onPress={agregarDirector} />


            

        </View>
    )
}