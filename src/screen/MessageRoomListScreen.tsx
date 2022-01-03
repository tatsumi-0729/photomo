import * as React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import MessageRoom from '../components/MessageRoom';

const ITEM_WIDTH = Dimensions.get('window').width;

export default function MessageRoomListScreen() {
  const messageList = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
    {id: '9'},
  ];

  const renderItem = ({item}: {item: any}) => <MessageRoom roomId={item.id} />;

  return (
    <View style={styles.messageWrap}>
      <FlatList
        data={messageList}
        renderItem={renderItem}
        keyExtractor={messageList => messageList.id}
        // Performance settings
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={2} // Reduce initial render amount
        maxToRenderPerBatch={1} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Incåease time between renders
        windowSize={7} // Reduce the window size
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messageWrap: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    width: ITEM_WIDTH,
  },
});
