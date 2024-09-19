import 'react-native-url-polyfill/auto'
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground
        source={require('../assets/img/bg.jpg')}
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <CustomButton title='Comenzar
          ' handlePress={() => router.push('(tabs)/home')}
            styles={styles.text} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
