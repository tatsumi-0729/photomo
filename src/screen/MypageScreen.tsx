import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default function MypageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mypage</Text>
      <View style={styles.separator} />
      <Button text="mypage button"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffef9'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
