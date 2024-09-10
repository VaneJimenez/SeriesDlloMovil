// Suggested code may be subject to a license. Learn more: ~LicenseLog:3613121419.
import { Link, router } from 'expo-router';
import CustomButton from '../components/CustomButton';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomButton title='Comenzar' handlePress={() => router.push('(tabs)/home')}
          containerStyles={styles.container} textStyles={styles.text} />
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
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
