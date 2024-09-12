import 'react-native-url-polyfill/auto'
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
//import { bg } from '../assets/img/bg.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/img/bg.jpg')}
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}>SeriesDM</Text>
          <CustomButton title='Comenzar' handlePress={() => router.push('(tabs)/home')}
            styls={styles.text} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
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
