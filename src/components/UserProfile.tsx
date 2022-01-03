import * as React from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import Picture from '../components/Picture';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../Types';
import type {UserProfileParams} from '../Types';

const WIDTH = Dimensions.get('window').width;

type PhotomoListScreenProp = StackNavigationProp<
  RootStackParamList,
  'PhotomoList'
>;

type FavoriteListScreenProp = StackNavigationProp<
  RootStackParamList,
  'FavoriteList'
>;

export default function UserProfile({props}: {props: UserProfileParams}) {
  const PhotomoListScreenNavigation = useNavigation<PhotomoListScreenProp>();
  const FavoriteListScreenNavigation = useNavigation<FavoriteListScreenProp>();
  const userId = props[0].userId;
  const isMe = props[1].isMe;
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

  return (
    <View style={styles.container}>
      <View style={styles.avatarNameWrap}>
        {/* プロフィール写真 */}
        <Avatar
          rounded
          size={100}
          title="TT"
          source={require('../../assets/images/2018092810504201.jpeg')}
        />

        <View style={styles.nameWrap}>
          {/* 名前 */}
          <Text style={styles.name}>たつみ_{userId}</Text>
          <Text style={styles.id}>@tatsumi_engineer</Text>
          <Text></Text>
          {/* フォトモ */}
          <View style={styles.photomoWrap}>
            <Text style={styles.photomo}>フォトモ：</Text>
            <Text
              style={styles.photomoCount}
              onPress={() =>
                PhotomoListScreenNavigation.navigate('PhotomoList', userId)
              }>
              192
            </Text>
          </View>
          {/* お気に入り */}
          {isMe && (
            <View style={styles.favoriteWrap}>
              <Text style={styles.favorite}>気になる：</Text>
              <Text
                style={styles.favoriteCount}
                onPress={() =>
                  FavoriteListScreenNavigation.navigate('FavoriteList', userId)
                }>
                59
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* 自己紹介欄 */}
      <TextInput
        style={styles.textArea}
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={5}
        multiline={true}>
        自己紹介のテストです。初めまして。 人や景色の写真を撮るのが好きです。
        よろしくお願いします(^ ^) よく五反田に出没します。
      </TextInput>

      {/* 写真一覧 */}
      <View style={styles.pictureWrap}>
        {picturePathList.map((item: any, i: number) => (
          <View style={styles.picture}>
            <Picture picturePath={item.path} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: WIDTH,
    backgroundColor: '#fffef9',
  },
  avatarNameWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    margin: 20,
  },
  nameWrap: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
  },
  id: {
    marginTop: 5,
    fontSize: 15,
    color: 'gray',
  },
  photomoWrap: {flexDirection: 'row'},
  photomo: {
    marginTop: 7,
    fontSize: 14,
  },
  photomoCount: {
    marginTop: 7,
    fontSize: 14,
  },
  favoriteWrap: {flexDirection: 'row'},
  favorite: {
    marginTop: 5,
    fontSize: 14,
  },
  favoriteCount: {
    marginTop: 5,
    fontSize: 14,
  },
  textArea: {
    height: 70,
    width: '87%',
    marginBottom: 15,
  },
  pictureWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: WIDTH,
    backgroundColor: '#ecf0f1',
  },
  picture: {
    width: WIDTH / 2,
    borderWidth: 0.4,
    borderColor: 'black',
  },
});
