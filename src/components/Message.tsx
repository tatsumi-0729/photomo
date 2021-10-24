import * as React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

const WIDTH = Dimensions.get('window').width;

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
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          メッセージのテストです。メッセージのテストです。
          メッセージのテストです。メッセージのテストです。
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fffef9',
    borderWidth: 0.4,
    borderColor: '#dcdcdc',
  },
  messageContainer: {
    width: WIDTH,
  },
  message: {
    margin: 10,
    width: '75%',
    fontSize: 15,
  },
});
