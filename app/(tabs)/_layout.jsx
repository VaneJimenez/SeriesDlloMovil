import { home } from '../../assets/icons/home.png';
import React from 'react'
import { Tabs } from 'expo-router'
import { Image, Text, View } from 'react-native';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View>
            <Image
                source={icon}
                style={{
                    width: 24,
                    height: 24,
                }}
            />
            <Text style={{ color: color }}>
                {name}
            </Text>
        </View >
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#d46bff',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#191c66',
                    borderTopWidth: 1,
                    borderTopColor: '#191c66',
                    height: 64,
                }
            }}>
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='Home'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='series'
                    options={{
                        title: 'Series',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='Series'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='actor'
                    options={{
                        title: 'Actores',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='Actores'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='director'
                    options={{
                        title: 'Directores',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='Directores'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='plataforma'
                    options={{
                        title: 'Plataformas',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='Sitios'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='idioma'
                    options={{
                        title: 'Idiomas',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='Idiomas'
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout