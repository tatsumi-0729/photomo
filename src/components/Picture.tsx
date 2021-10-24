import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';

const ITEM_WIDTH = Dimensions.get('window').width;

export default function MypageScreen({picturePath}: {picturePath: string}) {
  return (
    <View>
      <Card style={styles.picture}>
        <Card.Cover source={require('../../assets/images/90_main.jpeg')} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    width: ITEM_WIDTH / 2,
    borderWidth: 0.4,
    borderColor: 'black',
  },
});
