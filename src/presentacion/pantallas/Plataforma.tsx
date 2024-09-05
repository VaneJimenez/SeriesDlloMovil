import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export const Plataforma = () => {


    const [idPlataforma, setIdPlataforma] = useState('');
    const [nombre, setNombre] = useState('');

    const agregarPlataforma = () => {
        if (idPlataforma && nombre) {
            setIdPlataforma('')
            setNombre('')
        }
    }

    return (
        <View>

            <Text>
                Agregar Plataforma
            </Text>

            <TextInput
                placeholder='id'
                value={idPlataforma}
                onChangeText={text => setIdPlataforma(text)}
            />
            <TextInput
                placeholder='Nombre'
                value={nombre}
                onChangeText={text => setNombre(text)}
            />

            <Button title="Agregar plataforma" onPress={agregarPlataforma} />

        </View>
    )
}