import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../Types';

type MessageRoomDetailProp = StackNavigationProp<
  RootStackParamList,
  'MessageRoomDetail'
>;

const WIDTH = Dimensions.get('window').width;

export default function MessageRoom({roomId}: {roomId: any}) {
  const MessageRoomDetailScreenNavigation =
    useNavigation<MessageRoomDetailProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        MessageRoomDetailScreenNavigation.navigate('MessageRoomDetail', roomId)
      }>
      <View style={styles.container}>
        <Avatar
          rounded
          size={55}
          title="TT"
          source={{
            uri: '../../assets/images/Eawok9YU0AIt-fv.jpeg',
          }}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.name}>tatsumi</Text>
          <Text style={styles.message}>
            メッセージのテストです。メッセージのテストです。
            メッセージのテストです。メッセージのテストです。
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH,
    padding: 10,
    backgroundColor: '#fffef9',
    borderWidth: 0.4,
    borderColor: '#dcdcdc',
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    width: '85%',
    fontSize: 15,
  },
  message: {
    margin: 8,
    width: '85%',
    fontSize: 11,
  },
});
