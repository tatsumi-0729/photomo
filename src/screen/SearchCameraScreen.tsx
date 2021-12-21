import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SearchCameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>カメラマン</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffef9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
