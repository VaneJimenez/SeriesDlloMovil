import { Link, router } from 'expo-router';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Button onPress={()=> router.push('(tabs)/home')} title='Home'/>
        <Button onPress={()=> router.push('(tabs)/actores')} title='Actores'/>
        <Button onPress={()=> router.push('(tabs)/series')} title='Series'/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
