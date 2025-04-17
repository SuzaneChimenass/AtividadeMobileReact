import React from 'react';
import { View, StyleSheet } from 'react-native';

const TabuleiroXadrez = () => (
  <View style={styles.board}>

    <View style={styles.row}>
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
      <View style={[styles.square, { backgroundColor: '#000' }]} />
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
      <View style={[styles.square, { backgroundColor: '#000' }]} />
    </View>

    <View style={styles.row}>
      <View style={[styles.square, { backgroundColor: '#000' }]} />
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
      <View style={[styles.square, { backgroundColor: '#000' }]} />
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
    </View>

    <View style={styles.row}>
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
      <View style={[styles.square, { backgroundColor: '#000' }]} />
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
      <View style={[styles.square, { backgroundColor: '#000' }]} />
    </View>

    <View style={styles.row}>
      <View style={[styles.square, { backgroundColor: '#000' }]} />
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
      <View style={[styles.square, { backgroundColor: '#000' }]} />
      <View style={[styles.square, { backgroundColor: '#FFF' }]} />
    </View>

  </View>
);

export default TabuleiroXadrez;

const styles = StyleSheet.create({
  board: {
    width: 200,
    height: 200,
    margin: 20,
    borderWidth: 1,
    borderColor: '#333'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  square: {
    flex: 1 
  }
});
