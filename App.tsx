import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CatComponent from './blocs/bloc-cat/views/view-cats';

export default function App() {
  return (
    <View style={styles.container}>
      <CatComponent />
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
