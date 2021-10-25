import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import {Chip} from 'react-native-elements';

export default function Message({genre}: {genre: string}) {
  return (
    <View style={styles.container}>
      <Chip title={genre} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 1,
  },
});
