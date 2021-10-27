import * as React from 'react';
import {Dimensions, View} from 'react-native';
import {Card} from 'react-native-paper';

const ITEM_WIDTH = Dimensions.get('window').width;

export default function MypageScreen({picturePath}: {picturePath: any}) {
  return (
    <View>
      <Card>
        <Card.Cover source={picturePath} />
      </Card>
    </View>
  );
}
