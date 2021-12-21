import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Picture from '../components/Picture';

const WIDTH = Dimensions.get('window').width;

export default function UserDetailScreen(userId: number) {
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

          <View style={styles.nameWrap}>
            {/* 名前 */}
            <Text style={styles.name}>tatsumi</Text>
            <Text style={styles.id}>@tatsumi_engineer</Text>
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
    </ScrollView>
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
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
  },
  id: {
    marginTop: 5,
    fontSize: 15,
    color: 'gray',
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
