import * as React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

const ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').height;

export default function Message() {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={60}
        title="TT"
        source={{
          uri: '../../assets/images/Eawok9YU0AIt-fv.jpeg',
        }}
      />
      <Text style={styles.message}>
        メッセージのテストです。メッセージのテストです。
        メッセージのテストです。メッセージのテストです。
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fffef9',
    borderWidth: 0.4,
    borderColor: '#dcdcdc',
  },
  message: {
    margin: 10,
    fontSize: 15,
  },
});
