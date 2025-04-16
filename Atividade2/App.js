import {SafeAreaView, StyleSheet } from 'react-native';

// or any files within the Snack
import SimuladorPedagio from './components/SimuladorPedagio';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SimuladorPedagio />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems :'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
