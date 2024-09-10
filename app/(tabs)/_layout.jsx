import { home } from '../../assets/icons/home.png';
import React from 'react'
import { Tabs } from 'expo-router'
import { Image, Text, View } from 'react-native';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                style={{
                    width: 24,
                    height: 24,
                    tintColor: color,
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
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
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
                                name='series'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='actores'
                    options={{
                        title: 'Actores',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='actores'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='directores'
                    options={{
                        title: 'Directores',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='directores'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='plataforma'
                    options={{
                        title: 'Plataforma',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='plataforma'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='idiomas'
                    options={{
                        title: 'Idiomas',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name='idiomas'
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