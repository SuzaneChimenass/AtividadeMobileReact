import {SafeAreaView, StyleSheet } from 'react-native';

import LuzBandeiraTarifaria from './components/LuzBandeiraTarifaria';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LuzBandeiraTarifaria />
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
