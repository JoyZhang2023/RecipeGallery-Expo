import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Gallery from './components/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Interactive Recipe Gallery</Text>
      <Gallery/>
      <StatusBar style="auto" />
    </View>
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
