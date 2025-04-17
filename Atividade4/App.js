import {SafeAreaView, StyleSheet } from 'react-native';

import TabuleiroXadrez from './components/TabuleiroXadrez';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabuleiroXadrez />
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
