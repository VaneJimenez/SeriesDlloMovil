import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
}) => {
    return (
        <TouchableOpacity onPress={handlePress}
            activeOpacity={0.2}
            disabled={isLoading}
            style={[styles.container, containerStyles]}>
            <Text style={[styles.text, textStyles]}>{title}</Text>
        </TouchableOpacity>

    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        width: 140,
        height: 50,
        alignItems: 'stretch',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
})