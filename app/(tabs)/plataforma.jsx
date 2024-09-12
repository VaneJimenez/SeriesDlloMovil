import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const plataforma = () => {
    const [plataforma, setPlataforma] = useState('');

    const agregarPlataforma = () => {
        if (plataforma) {
            setPlataforma('')
        }
    }

    return (
        <View>

            <Text>
                Agregar Plataforma
            </Text>

            <TextInput
                placeholder='Plataforma'
                value={plataforma}
                onChangeText={text => setPlataforma(text)}
            />

            <Button title="Agregar" onPress={agregarPlataforma} />

        </View>
    )
}

export default plataforma