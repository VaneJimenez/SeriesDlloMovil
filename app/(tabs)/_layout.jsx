import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 64,
                }
            }}>
                <Tabs.Screen name='home' options={{title: 'Home'}}/>
                <Tabs.Screen name='actores' options={{title: 'Actores'}}/>
                <Tabs.Screen name='series' options={{title: 'Series'}}/>

                        
            </Tabs>
        </>
    )
}

export default TabsLayout