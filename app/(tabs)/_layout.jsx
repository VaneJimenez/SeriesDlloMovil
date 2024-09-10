import { home } from '../../assets/icons/home.jpeg';
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
                <Tabs.Screen name='actores' options={{ title: 'Actores' }} />
                <Tabs.Screen name='series' options={{ title: 'Series' }} />



            </Tabs>
        </>
    )
}

export default TabsLayout