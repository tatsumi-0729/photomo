import * as React from 'react';
import {ScrollView, Text} from 'react-native';

export default function MessageRoomDetailScreen({route}: {route: any}) {
  const MessageRoomId = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>{MessageRoomId}</Text>
    </ScrollView>
  );
}
