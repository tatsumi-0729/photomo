import * as React from 'react';
import {Card} from 'react-native-paper';

export default function MypageScreen({picturePath}: {picturePath: any}) {
  return (
    <Card>
      <Card.Cover source={picturePath} />
    </Card>
  );
}
