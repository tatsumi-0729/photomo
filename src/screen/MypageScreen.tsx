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
import Chip from '../components/Chip';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function MypageScreen() {
  const picturePathList = [
    {path: require('../../assets/images/90_main.jpeg')},
    {
      path: require('../../assets/images/711863adfd463-69d0-4475-8ddd-c7bdca10b76d_m.jpeg'),
    },
    {
      path: require('../../assets/images/20210331_mizu-zekkei_016-670x443.jpeg'),
    },
    {path: require('../../assets/images/90_main.jpeg')},
    {path: require('../../assets/images/90_main.jpeg')},
    {
      path: require('../../assets/images/20210331_mizu-zekkei_016-670x443.jpeg'),
    },
    {
      path: require('../../assets/images/20210331_mizu-zekkei_016-670x443.jpeg'),
    },
  ];

  const chipList = [
    {chip: '人物'},
    {chip: 'アマチュア'},
    {chip: '景色'},
    {chip: 'ポートレート'},
  ];

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.avatarNameWrap}>
            {/* プロフィール写真 */}
            <Avatar
              rounded
              size={100}
              title="TT"
              source={{
                uri: '../../assets/images/Eawok9YU0AIt-fv.jpeg',
              }}
            />

            <View style={styles.nameGenreWrap}>
              {/* 名前 */}
              <Text style={styles.name}>tatsumi</Text>
              <View style={styles.genreWrap}>
                {chipList.map((item: any) => (
                  <Chip genre={item.chip} />
                ))}
              </View>
            </View>
          </View>

          {/* 自己紹介欄 */}
          <TextInput
            style={styles.textArea}
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={5}
            multiline={true}>
            自己紹介のテストです。初めまして。
            人や景色の写真を撮るのが好きです。 よろしくお願いします(^ ^)
            よく五反田に出没します。
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
    alignItems: 'center',
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#fffef9',
  },
  avatarNameWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    margin: 10,
    padding: 10,
  },
  nameGenreWrap: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  genreWrap: {
    width: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  name: {
    marginVertical: 10,
    fontSize: 15,
  },
  textArea: {
    height: 70,
    width: '85%',
    textAlignVertical: 'top',
  },
  pictureWrap: {
    flex: 1,
    flexWrap: 'wrap',
    width: WIDTH,
    margin: 10,
    backgroundColor: '#ecf0f1',
  },
});
