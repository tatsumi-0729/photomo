import * as React from 'react';
import {ScrollView, Text} from 'react-native';

export default function PhotomoListScreen({route}: {route: any}) {
  const userId = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>{userId}</Text>
    </ScrollView>
  );
}
