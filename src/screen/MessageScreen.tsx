import * as React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import Message from '../components/Message';

const ITEM_WIDTH = Dimensions.get('window').width;

export default function MypageScreen() {
  const messageList = [
    {path: ''},
    {path: ''},
    {path: ''},
    {path: ''},
    {path: ''},
    {path: ''},
    {path: ''},
    {path: ''},
    {path: ''},
  ];
  return (
    <View style={styles.messageWrap}>
      <FlatList
        data={messageList}
        renderItem={() => <Message />}
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
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#ecf0f1',
    width: ITEM_WIDTH,
  },
});
