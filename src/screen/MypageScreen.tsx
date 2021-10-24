import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Picture from '../components/Picture';

const ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').height;

export default function MypageScreen() {
  const picturePathList = [
    {path: '../../assets/images/90_main.jpeg'},
    {
      path: '../../assets/images/711863adfd463-69d0-4475-8ddd-c7bdca10b76d_m.jpeg',
    },
    {path: '../../assets/images/20210331_mizu-zekkei_016-670x443.jpeg'},
    {path: '../../assets/images/90_main.jpeg'},
    {path: '../../assets/images/90_main.jpeg'},
  ];
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.separator} />

          {/* プロフィール写真 */}
          <Avatar
            rounded
            size={125}
            title="TT"
            source={{
              uri: '../../assets/images/Eawok9YU0AIt-fv.jpeg',
            }}
          />

          {/* 名前 */}
          <Text style={styles.name}>tatsumi</Text>

          {/* 自己紹介欄 */}
          <TextInput
            style={styles.textArea}
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}>
            自己紹介のテストです。初めまして。testtesttesttesttest
            testtesttesttesttesttesttesttesttesttesttesttesttesttest
            testtesttest testtesttesttesttesttesttesttest
          </TextInput>

          {/* 写真一覧 */}
          <View style={styles.pictureWrap}>
            {picturePathList.map((item: any, i: number) => (
              <Picture picturePath={item.path} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: '#fffef9',
  },
  name: {
    marginVertical: 10,
    fontSize: 15,
  },
  separator: {
    marginVertical: 15,
  },
  textArea: {
    height: 150,
    width: '90%',
    margin: 10,
    textAlignVertical: 'top',
  },
  pictureWrap: {
    flex: 1,
    flexWrap: 'wrap',
    width: ITEM_WIDTH,
    backgroundColor: '#ecf0f1',
  },
});
